# Deployment

## Overview

The website is a static React 19 + Vite application. Production deployment should build the app once and serve the generated `dist/` directory from a static host, CDN, or object storage-backed web origin.

## Required Runtime

- Node.js `>=20.19.0`
- npm `>=10.0.0`

## Build Steps

```bash
npm ci
npm run ci
```

`npm run ci` runs:

1. TypeScript project build
2. ESLint
3. Prettier check
4. Vitest test suite
5. Vite production build

The deployable artifact is `dist/`.

## Static Hosting Requirements

Configure the host to:

- Serve `dist/index.html` for unknown application routes so React Router can resolve client routes.
- Serve `dist/robots.txt` and `dist/sitemap.xml` at the site root.
- Enable HTTPS.
- Enable Brotli or gzip compression.
- Cache hashed assets under `dist/assets/` with a long immutable cache policy.
- Cache `index.html`, `robots.txt`, and `sitemap.xml` with a shorter policy so releases and SEO updates propagate quickly.

## Environment Setup

Set production variables before building. At minimum:

```bash
VITE_APP_NAME=HDS
VITE_APP_URL=https://nofalseo.com
VITE_DEFAULT_LOCALE=en
VITE_API_BASE_URL=/api
VITE_ENABLE_CONTACT_FORM=true
VITE_ENABLE_DARK_MODE=true
```

All client-exposed variables must use the `VITE_` prefix. Do not put secrets in frontend environment variables.

## Backend And CRM Readiness

The current Contact feature uses a mock repository. To connect production lead capture:

1. Implement a production `ContactRepository` adapter under `features/contact/repository`.
2. Call the backend through `lib/api` or the centralized axios layer.
3. Normalize backend errors into user-safe messages.
4. Keep server-side validation authoritative.
5. Route analytics through `lib/analytics`; do not call vendor SDKs directly from UI components.

## Release Verification

After deployment:

- Open `/`, `/services`, `/about`, `/portfolio`, `/contact`, and an invalid route.
- Open one service detail and one portfolio detail route directly from the address bar.
- Verify `https://nofalseo.com/robots.txt` and `https://nofalseo.com/sitemap.xml` load.
- Verify page title, canonical URL, Open Graph, Twitter tags, and structured data in browser dev tools.
- Switch English/Arabic and confirm `html[lang]` and `html[dir]` update.
