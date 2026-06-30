# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it
privately to **bryamejia@gmail.com**. Do **not** open a public issue.

You should expect a response within 72 hours. Once the issue is confirmed and
a fix is ready, a security release will be published.

## Supported Versions

Only the latest version on `main` is supported.

## Security Practices

- Dependencies are kept current via [Dependabot](.github/dependabot.yml).
- All PRs run through GitHub Actions CI: lint, format, type-check, test, build.
- `bun audit` runs in CI and must report zero high-severity vulnerabilities to merge.
- Hosted on Vercel with HTTPS and sane default security headers.
