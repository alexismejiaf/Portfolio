#!/usr/bin/env bun
/**
 * One-shot image optimizer for /public.
 * Produces optimized .webp + .avif variants alongside a downsized .png fallback.
 * Run with: bun run optimize:images
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = "public";
const MAX_WIDTH = 1200;
const TARGETS = [
  { ext: "avif", options: { quality: 60, effort: 6 } },
  { ext: "webp", options: { quality: 80, effort: 6 } },
] as const;
const RAW_EXT = new Set([".png", ".jpg", ".jpeg"]);
const SKIP = new Set(["hero-poster.jpg"]);

function fmtBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

async function optimize(file: string) {
  const inputPath = join(PUBLIC_DIR, file);
  const { name } = parse(file);
  const inputBytes = (await stat(inputPath)).size;
  const image = sharp(inputPath, { failOn: "none" });
  const meta = await image.metadata();
  const resizeWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

  console.log(`\n📷 ${file} (${fmtBytes(inputBytes)}, ${meta.width}x${meta.height})`);

  for (const { ext, options } of TARGETS) {
    const outPath = join(PUBLIC_DIR, `${name}.${ext}`);
    const pipeline = sharp(inputPath, { failOn: "none" }).resize({
      width: resizeWidth,
      withoutEnlargement: true,
    });
    await (
      ext === "avif"
        ? pipeline.avif(options as sharp.AvifOptions)
        : pipeline.webp(options as sharp.WebpOptions)
    ).toFile(outPath);
    const outBytes = (await stat(outPath)).size;
    const saved = (((inputBytes - outBytes) / inputBytes) * 100).toFixed(1);
    console.log(`  → ${ext.padEnd(4)} ${fmtBytes(outBytes).padStart(8)} (${saved}% smaller)`);
  }

  // Also re-compress the original PNG/JPG fallback in-place if we can shrink it.
  const inputExt = extname(file).toLowerCase().slice(1);
  if (inputExt === "png" || inputExt === "jpg" || inputExt === "jpeg") {
    const tmpPath = join(PUBLIC_DIR, `${name}.opt.${inputExt}`);
    const pipe = sharp(inputPath, { failOn: "none" }).resize({
      width: resizeWidth,
      withoutEnlargement: true,
    });
    if (inputExt === "png") {
      await pipe.png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(tmpPath);
    } else {
      await pipe.jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
    }
    const tmpBytes = (await stat(tmpPath)).size;
    if (tmpBytes < inputBytes) {
      await Bun.write(inputPath, Bun.file(tmpPath));
      const saved = (((inputBytes - tmpBytes) / inputBytes) * 100).toFixed(1);
      console.log(
        `  → ${inputExt.padEnd(4)} ${fmtBytes(tmpBytes).padStart(8)} (${saved}% smaller, overwrote original)`,
      );
    }
    await Bun.file(tmpPath).delete?.();
  }
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
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
