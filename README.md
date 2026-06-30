# Bryan Alexis Mejía Fonseca — Portfolio

Personal portfolio site. Liquid-glass design, auto dark/light theming, motion background, animated reveals.

🔗 **Live**: https://portfolio-alexis-mejia.vercel.app

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **[React 19](https://react.dev)**
- **[TypeScript 6](https://www.typescriptlang.org)** (strict mode)
- **[Tailwind CSS 4](https://tailwindcss.com)**
- **[Motion](https://motion.dev)** (animations)
- **[Remotion](https://www.remotion.dev)** (hero video generation)
- **[Vitest](https://vitest.dev)** + **[Testing Library](https://testing-library.com)** (tests)
- **[Bun](https://bun.com)** (package manager + script runner)

## Prerequisites

- [Bun](https://bun.com) >= 1.3.0 — `curl -fsSL https://bun.com/install | bash`

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server (Next.js + Turbopack)
bun run dev

# Run tests
bun run test

# Lint
bun run lint

# Production build
bun run build

# Start production server
bun run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script                    | Description                     |
| ------------------------- | ------------------------------- |
| `bun run dev`             | Start dev server with Turbopack |
| `bun run build`           | Production build                |
| `bun run start`           | Run production server           |
| `bun run lint`            | Run ESLint                      |
| `bun run lint:fix`        | ESLint with auto-fix            |
| `bun run type-check`      | TypeScript type-check (no emit) |
| `bun run format`          | Format all files with Prettier  |
| `bun run format:check`    | Check formatting (CI)           |
| `bun run test`            | Run tests once                  |
| `bun run test:watch`      | Run tests in watch mode         |
| `bun audit`               | Security audit                  |
| `bun run remotion:render` | Regenerate hero video assets    |

## Project Structure

```
src/
├── app/              # Next.js App Router pages, layout, metadata
│   ├── layout.tsx    # Root layout, JSON-LD, theme provider
│   ├── page.tsx      # Home page
│   ├── manifest.ts   # PWA manifest
│   ├── robots.ts     # robots.txt
│   ├── sitemap.ts    # sitemap.xml
│   └── opengraph-image.tsx
├── components/       # React components
│   ├── theme/        # Theme provider + toggle
│   └── ui/           # Reusable UI primitives
├── data/             # Static content (experience, projects, skills)
├── hooks/            # Custom React hooks
├── lib/              # Utilities (theme helpers, etc.)
└── test/             # Vitest setup
remotion/             # Remotion compositions for hero video
public/               # Static assets
```

## Best Practices

- ✅ TypeScript strict mode
- ✅ ESLint with Next.js + TypeScript rules
- ✅ Prettier formatting
- ✅ Vitest + React Testing Library
- ✅ Path aliases (`@/*`)
- ✅ SEO: metadata, OpenGraph, Twitter cards, JSON-LD structured data, sitemap, robots
- ✅ PWA manifest
- ✅ No-flash dark/light theme
- ✅ Font optimization (`next/font`)
- ✅ Pre-commit hooks via Husky + lint-staged
- ✅ GitHub Actions CI (lint, format, type-check, test, build, audit)
- ✅ Dependabot for automated weekly dependency updates (Bun ecosystem)
- ✅ Bun for fast installs and script execution
- ✅ Zero known vulnerabilities (`bun audit`)

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` deploy to production automatically. Vercel auto-detects `bun.lock` and uses Bun for installs.

## License

[MIT](./LICENSE) © Bryan Alexis Mejía Fonseca
