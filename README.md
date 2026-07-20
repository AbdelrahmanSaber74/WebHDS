# HDS Premium Website

Enterprise-grade React application for the HDS company website.

## Stack

- React 19
- Vite
- TypeScript
- Chakra UI
- React Router v7
- TanStack Query
- React Hook Form
- Zod
- Framer Motion
- Lucide React
- Axios
- Vitest
- React Testing Library

## Requirements

- Node.js 20.19+
- npm 10+

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Use public Vite environment variables only. Never expose secrets in frontend code.

## Quality Gates

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test:run
npm run build
```

Or run the full local CI sequence:

```bash
npm run ci
```

## Architecture

Read `Architecture.md` before writing code. It is the project architecture contract.

The project uses Feature-Based Architecture. Pages live in `src/app/pages` as composition-only files. Business-specific sections and components live inside `src/features`. Generic reusable UI and utilities live in `src/shared`. Technical infrastructure lives in `src/lib`.

## Production Docs

- `docs/Production-Checklist.md`
- `docs/Deployment.md`
- `docs/Environment.md`
- `docs/CMS-Readiness.md`
- `docs/Contact-Architecture.md`

## CI/CD

A GitHub Actions workflow is available at `.github/workflows/ci.yml` and runs install, typecheck, lint, format check, tests, and build.

## Delivery Standard

Every feature must satisfy `Definition of Done.md` before it is considered complete.
