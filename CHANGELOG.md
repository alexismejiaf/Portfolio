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
- Removed `next.config.ts` security headers task: deferred (Vercel sets sane defaults; revisit when adding custom domains)

### Added

- README, LICENSE (MIT), SECURITY, CONTRIBUTING, CHANGELOG
- `.env.example` documenting expected environment variables
- GitHub Actions CI: lint, format, type-check, test, build, audit
- Dependabot configuration for automated weekly updates (Bun ecosystem)
- Prettier configuration
- Husky pre-commit hooks via lint-staged
- `type-check`, `format`, `format:check`, `lint:fix` scripts

### Changed (tooling)

- **Migrated from npm to [Bun](https://bun.com)**. Replaced `package-lock.json`
  with `bun.lock`, pinned `packageManager: bun@1.3.14`, added `engines.bun >= 1.3.0`,
  rewrote CI to use `oven-sh/setup-bun@v2`, and switched Dependabot to the `bun` ecosystem.
