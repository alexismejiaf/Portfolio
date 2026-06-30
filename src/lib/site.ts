/**
 * Canonical site URL.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL (explicit override, used in production)
 *   2. VERCEL_PROJECT_PRODUCTION_URL (set by Vercel on production builds)
 *   3. VERCEL_URL (set by Vercel on preview deployments)
 *   4. http://localhost:3000 (local dev fallback)
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  const vercelPreview = process.env.VERCEL_URL;
  if (vercelPreview) return `https://${vercelPreview}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
