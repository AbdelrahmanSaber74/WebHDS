# CMS Readiness Guide

## Overview

Marketing content is served through feature-owned content services. Components render typed props and hooks, while services hide whether content comes from local TypeScript data, REST, GraphQL, or a headless CMS.

Current implementation remains fully static:

- `features/*/data` stores local content records.
- `features/*/services/*repository.ts` adapts local data to the repository contract.
- `features/*/services/*service.ts` exposes stable feature APIs such as `getContent()` and `getMetadata()`.
- UI components and pages do not import raw data directly.

## Repository Contract

Shared repository utilities live in `src/lib/content`.

```ts
ContentRepository<TContent, TMetadata>;
```

Every repository exposes:

- `getContent()` for page or feature content.
- `getMetadata()` for SEO or organization metadata.

The current local repositories use `createLocalContentRepository`. A future CMS adapter should implement the same contract and replace only the repository implementation.

## Feature Services

Each marketing feature exposes a stable service boundary:

- Home: `homeContentService.getContent()` and `getMetadata()`.
- About: `aboutContentService.getContent()` and `getMetadata()`.
- Services: `servicesCatalogService.getContent()` and `getMetadata(slug?)`.
- Portfolio: `portfolioCatalogService.getContent()` and `getMetadata(slug?)`.
- Company: `companyService.getContent()` and `getMetadata()`.

Existing backwards-compatible methods are preserved, such as `getHomeContent()`, `getAboutContent()`, and `getListingContent()`.

## Replacing Local Content With an API

To migrate a feature to CMS/API content:

1. Keep the feature types unchanged.
2. Replace the local repository file with a REST, GraphQL, or CMS repository implementation.
3. Normalize external payloads to the existing feature content types at the repository boundary.
4. Keep components, hooks, routes, and pages unchanged.
5. Keep translation keys in content fields unless a CMS explicitly returns localized structures.

## Images and CDN Migration

Image references are centralized in content data or `src/assets/images`. Components receive image URLs through content models. A future CDN migration should map CMS asset URLs inside repositories or feature data, not inside JSX components.

## Navigation and Footer Content

Global marketing shell content lives in `src/app/content` because it belongs to the app composition shell rather than a single business feature. It contains typed navigation, legal links, and newsletter copy keys. Company-owned content such as offices, contact channels, social links, certifications, and organization metadata remains in `features/company`.

## New Marketing Page Checklist

For a new marketing page:

1. Create feature-owned types for its business content.
2. Store initial local content under `features/<feature>/data`.
3. Add a local repository under `features/<feature>/services`.
4. Expose `getContent()` and `getMetadata()` through the feature service.
5. Let hooks consume the service, not raw data.
6. Keep `app/pages` as composition-only.
7. Keep visible strings as translation keys unless intentionally proper nouns.
8. Add service and repository tests before shipping.
