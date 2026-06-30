#!/usr/bin/env bun
/**
 * Optimize raster assets in /public.
 *
 * Strategy: keep the original file format (so next/image's runtime
 * transcoding to AVIF/WebP keeps working), but cap dimensions and
 * re-compress. next/image will serve modern formats automatically via
 * `images.formats` in next.config.ts, so we don't need to ship sibling
 * .avif/.webp files alongside the originals.
 *
 * Run with: bun run optimize:images
 */
import { readdir, stat } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = "public";
const DEFAULT_MAX_WIDTH = 1200;
// Per-file overrides for assets we know are displayed at a specific size.
// next/image will still serve a smaller transcoded copy at request time;
// these caps ensure the source asset itself isn't wastefully oversized.
const MAX_WIDTH: Record<string, number> = {
  "profile.png": 256, // displayed at 64x64, 4x for retina
};
const RAW_EXT = new Set([".png", ".jpg", ".jpeg"]);
const SKIP = new Set(["hero-poster.jpg"]);

function fmtBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

async function optimize(file: string) {
  const inputPath = join(PUBLIC_DIR, file);
  const inputBytes = (await stat(inputPath)).size;
  const ext = extname(file).toLowerCase().slice(1) as "png" | "jpg" | "jpeg";
  const { name } = parse(file);

  const buffer = await Bun.file(inputPath).arrayBuffer();
  const meta = await sharp(new Uint8Array(buffer)).metadata();
  const cap = MAX_WIDTH[file] ?? DEFAULT_MAX_WIDTH;
  const targetWidth = meta.width && meta.width > cap ? cap : meta.width;

  console.log(`\n📷 ${file} (${fmtBytes(inputBytes)}, ${meta.width}×${meta.height})`);

  const tmpPath = join(PUBLIC_DIR, `${name}.opt.${ext}`);
  const pipeline = sharp(new Uint8Array(buffer)).resize({
    width: targetWidth,
    withoutEnlargement: true,
  });

  if (ext === "png") {
    await pipeline.png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
  }

  const outBytes = (await stat(tmpPath)).size;
  if (outBytes < inputBytes) {
    await Bun.write(inputPath, Bun.file(tmpPath));
    const saved = (((inputBytes - outBytes) / inputBytes) * 100).toFixed(1);
    console.log(`  → ${fmtBytes(outBytes)} (${saved}% smaller, overwrote original)`);
  } else {
    console.log(`  → no improvement, kept original`);
  }
  await Bun.file(tmpPath).delete?.();
}

async function main() {
  const files = await readdir(PUBLIC_DIR);
  const targets = files.filter((f) => RAW_EXT.has(extname(f).toLowerCase()) && !SKIP.has(f));

  if (targets.length === 0) {
    console.log("No raster images to optimize.");
    return;
  }

  console.log(`Optimizing ${targets.length} image(s) in /${PUBLIC_DIR}...`);
  for (const file of targets) await optimize(file);
  console.log("\n✓ Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
