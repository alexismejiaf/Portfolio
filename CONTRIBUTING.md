# Contributing

This is a personal portfolio, but PRs that fix bugs or improve accessibility,
performance, or developer experience are welcome.

## Prerequisites

- [Bun](https://bun.com) >= 1.3.0

## Development

```bash
bun install
bun run dev
```

## Before committing

Pre-commit hooks run automatically via Husky + lint-staged:

- ESLint (with auto-fix)
- Prettier

You can also run manually:

```bash
bun run lint
bun run type-check
bun run test
bun run format:check
```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new section to portfolio
fix: correct theme toggle on mobile
chore: bump dependencies
docs: update README
```

## PRs

1. Fork & branch from `main`
2. Make your changes
3. Ensure CI passes (`bun run lint`, `bun run type-check`, `bun run test`, `bun run build`)
4. Open a PR with a clear description
