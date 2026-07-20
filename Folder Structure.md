# Folder Structure

```txt
src/
|-- app/              # Application providers, routing, pages, error boundaries
|-- features/         # Self-contained business features
|-- shared/           # Generic reusable UI, layouts, hooks, utilities, i18n
|-- lib/              # Technical infrastructure abstractions
|-- theme/            # Chakra design system and tokens
|-- config/           # App, routes, SEO, i18n, feature flags, env config
|-- assets/           # Images, icons, brand assets
|-- types/            # Global shared TypeScript types
`-- utils/            # App-agnostic global utilities
```

## Feature Structure

```txt
features/example/
|-- sections/
|-- components/
|-- hooks/
|-- services/
|-- data/
|-- types/
|-- constants/
`-- index.ts
```

Feature-specific logic and UI stay in the feature. Promote code to `shared` only when it is generic across unrelated domains.

## Page Structure

Pages live in `src/app/pages` and should remain thin composition layers.

## Empty Barrels

Some root barrels are reserved for future public exports. Keep them empty until the folder has real public members.
