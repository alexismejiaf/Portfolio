# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security

- **CRITICAL**: Removed obfuscated malware that was appended to `postcss.config.mjs`.
  The payload injected `createRequire` and used a self-executing obfuscated IIFE
  exposed via `global['r']`. Replaced with clean minimal PostCSS config.

### Changed

- Bumped all dependencies to latest stable versions
  - Next.js 16.0.7 → 16.2.9
  - React 19.2.1 → 19.2.7
  - TypeScript 5.8.3 → 6.0.3
  - Tailwind CSS 4.1.11 → 4.3.2
  - @types/node 24 → 26
  - All testing & build tools updated
- Added `postcss` override to address transitive vulnerability inside Next.js
- Vitest config now scopes test discovery to `src/` so it ignores `e2e/` Playwright specs

### Added

- README, LICENSE (MIT), SECURITY, CONTRIBUTING, CHANGELOG
- `.env.example` documenting expected environment variables
- GitHub Actions CI: lint, format, type-check, unit test, build, **E2E test, Lighthouse CI**, audit
- Dependabot configuration for automated weekly updates (Bun ecosystem)
- Prettier configuration
- Husky pre-commit hooks via lint-staged
- `type-check`, `format`, `format:check`, `lint:fix` scripts
- **Playwright E2E tests** (`e2e/`): smoke (page load, sections, JSON-LD, sitemap/robots,
  no console errors), navigation (anchor scroll, mobile menu, CV link), theme toggle
  (light/dark switch + localStorage persistence). 16 tests across Chromium desktop +
  Pixel 7 mobile.
- **Lighthouse CI** (`.lighthouserc.json`) with thresholds: performance ≥ 0.85,
  a11y / best-practices / SEO ≥ 0.95. Local audit: **100/100 across all categories.**
- **Image optimization**: `bun run optimize:images` (Sharp-based, replaces broken
  `@squoosh/cli`). Generated `public/profile.avif` (36 KB) and `public/profile.webp`
  (52 KB) from the 1.87 MB PNG, then re-compressed the PNG itself to 713 KB.
  Next.js Image component auto-serves AVIF/WebP via `images.formats` config.
- Security headers in `next.config.ts`: HSTS, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy. `poweredByHeader: false`, `reactStrictMode: true`.
- `priority` flag on the Hero LCP image

### Changed (tooling)

- **Migrated from npm to [Bun](https://bun.com)**. Replaced `package-lock.json`
  with `bun.lock`, pinned `packageManager: bun@1.3.14`, added `engines.bun >= 1.3.0`,
  rewrote CI to use `oven-sh/setup-bun@v2`, and switched Dependabot to the `bun` ecosystem.
