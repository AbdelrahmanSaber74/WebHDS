# Contributing

## Before You Start

Read `Architecture.md`. Architecture has priority over implementation speed.

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

## Commit Style

Use Conventional Commits:

- `feat:`
- `fix:`
- `refactor:`
- `docs:`
- `style:`
- `test:`
- `chore:`
- `perf:`
- `build:`

## Quality Gates

Before opening a pull request, run:

```bash
npm run ci
```

The CI pipeline runs the same sequence: install, type check, lint, formatting, tests, and build.

## Pull Request Requirements

A pull request must:

- preserve architectural boundaries
- avoid duplicated code
- avoid hardcoded visible text
- keep feature-specific code inside features
- keep shared code generic
- update documentation when architecture or setup changes

## Dependency Rules

Do not add dependencies without checking whether the existing stack already solves the problem. Prefer lightweight, maintained, tree-shaking-friendly packages. Major upgrades should be deliberate and tested in isolation.

## Definition of Done

Before a feature is marked complete, verify every item in `Definition of Done.md`.
