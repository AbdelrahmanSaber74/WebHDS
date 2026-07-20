# HDS Website Architecture Contract

This document is the source of truth for the HDS company website architecture. It must be read before adding features, pages, shared components, integrations, or application infrastructure.

Architecture quality has higher priority than implementation speed. If a requested implementation conflicts with this contract, preserve the architecture and refactor the implementation path.

## Architecture Overview

The project uses Feature-Based Architecture as the primary architecture.

The application is organized around long-lived business domains such as home, services, portfolio, blog, careers, contact, and legal. Each feature owns its domain-specific sections, components, data, hooks, services, types, and constants.

The `app` layer owns application composition, providers, routing, pages, and application-level error handling. Pages are intentionally thin composition layers. A page should import feature sections and shared layouts, then compose them.

The `shared` layer contains generic reusable code only. It must not contain HDS-specific business sections or feature-specific content.

The `lib` layer contains technical infrastructure abstractions such as API clients, query clients, analytics, logging, monitoring, tracking, storage, and error normalization. UI code must not depend directly on external providers.

## Folder Structure

```txt
src/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ providers/
â”‚   â”œâ”€â”€ router/
â”‚   â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ error-boundary/
â”‚   â”œâ”€â”€ App.tsx
â”‚   â”œâ”€â”€ main.tsx
â”‚   â””â”€â”€ index.ts
â”‚
â”œâ”€â”€ features/
â”‚   â”œâ”€â”€ home/
â”‚   â”‚   â”œâ”€â”€ sections/
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”œâ”€â”€ services/
â”‚   â”‚   â”œâ”€â”€ data/
â”‚   â”‚   â”œâ”€â”€ types/
â”‚   â”‚   â”œâ”€â”€ constants/
â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”œâ”€â”€ services/
â”‚   â”œâ”€â”€ solutions/
â”‚   â”œâ”€â”€ industries/
â”‚   â”œâ”€â”€ portfolio/
â”‚   â”œâ”€â”€ case-studies/
â”‚   â”œâ”€â”€ technologies/
â”‚   â”œâ”€â”€ process/
â”‚   â”œâ”€â”€ pricing/
â”‚   â”œâ”€â”€ blog/
â”‚   â”œâ”€â”€ careers/
â”‚   â”œâ”€â”€ faq/
â”‚   â”œâ”€â”€ contact/
â”‚   â””â”€â”€ legal/
â”‚
â”œâ”€â”€ shared/
â”‚   â”œâ”€â”€ ui/
â”‚   â”œâ”€â”€ layouts/
â”‚   â”œâ”€â”€ hooks/
â”‚   â”œâ”€â”€ utils/
â”‚   â”œâ”€â”€ types/
â”‚   â”œâ”€â”€ constants/
â”‚   â”œâ”€â”€ animations/
â”‚   â”œâ”€â”€ i18n/
â”‚   â””â”€â”€ index.ts
â”‚
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ api/
â”‚   â”œâ”€â”€ axios/
â”‚   â”œâ”€â”€ query/
â”‚   â”œâ”€â”€ storage/
â”‚   â”œâ”€â”€ analytics/
â”‚   â”œâ”€â”€ logger/
â”‚   â”œâ”€â”€ monitoring/
â”‚   â”œâ”€â”€ tracking/
â”‚   â”œâ”€â”€ error/
â”‚   â””â”€â”€ auth/
â”‚
â”œâ”€â”€ theme/
â”‚   â”œâ”€â”€ foundations/
â”‚   â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ semanticTokens.ts
â”‚   â”œâ”€â”€ recipes.ts
â”‚   â”œâ”€â”€ system.ts
â”‚   â””â”€â”€ index.ts
â”‚
â”œâ”€â”€ config/
â”‚   â”œâ”€â”€ app.config.ts
â”‚   â”œâ”€â”€ env.config.ts
â”‚   â”œâ”€â”€ feature-flags.config.ts
â”‚   â”œâ”€â”€ routes.config.ts
â”‚   â”œâ”€â”€ seo.config.ts
â”‚   â”œâ”€â”€ i18n.config.ts
â”‚   â””â”€â”€ index.ts
â”‚
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ images/
â”‚   â”œâ”€â”€ icons/
â”‚   â”œâ”€â”€ brand/
â”‚   â””â”€â”€ index.ts
â”‚
â”œâ”€â”€ types/
â”‚   â”œâ”€â”€ global.types.ts
â”‚   â””â”€â”€ index.ts
â”‚
â””â”€â”€ utils/
    â”œâ”€â”€ env.ts
    â”œâ”€â”€ seo.ts
    â””â”€â”€ index.ts
```

No root-level `components/` folder is allowed. Global UI belongs in `shared/ui`. Global layout belongs in `shared/layouts`. Feature-specific components belong inside their feature.

## Dependency Rules

Dependencies must flow in one direction.

- `app` may import from `features`, `shared`, `lib`, `theme`, `config`, `assets`, `types`, and `utils`.
- `features` may import from `shared`, `lib`, `theme`, `config`, `assets`, `types`, and `utils`.
- `shared` must never import from `features` or `app`.
- `lib` must never import from `features` or `app`.
- `theme` must never import from `features` or `app`.
- `config` must never import from `features` or `app`.
- Features should not import from other features directly. If cross-feature behavior is needed, introduce a shared abstraction, app-level composition, or a lib contract.

External provider dependencies must stay behind `lib` abstractions. Components must not directly call analytics, logging, monitoring, tracking, or third-party APIs.

## Naming Conventions

- Components use PascalCase: `FeatureCard.tsx`.
- Hooks use camelCase with `use` prefix: `useContactForm.ts`.
- Types use PascalCase and should be small: `ServiceItem`, `SeoConfig`.
- Utilities use camelCase: `formatCurrency`.
- Constants use `UPPER_SNAKE_CASE` when they represent fixed global values, environment-like values, or build-time flags. Local typed config may use descriptive camelCase exports.
- Data files use descriptive names: `services.data.ts`, `navigation.data.ts`.
- Config files use `*.config.ts`.
- Test files use `*.test.ts` or `*.test.tsx`.
- Barrel exports use `index.ts`.

Folder names should use kebab-case for multi-word folders, for example `case-studies`.

Consistency is more important than personal preference. Once a convention is chosen for a folder family, follow it everywhere.

## Component Guidelines

Components must follow Single Responsibility Principle.

- Keep components small and focused.
- Prefer composition over inheritance.
- Avoid nested components.
- Avoid duplicated JSX.
- Avoid business logic inside UI components.
- Avoid hardcoded repeated visual values.
- Avoid anonymous functions inside JSX when they cause unnecessary rerenders or reduce clarity.
- Split components before they become difficult to scan.

Shared UI components must support:

- variants
- sizes
- loading state where applicable
- disabled state where applicable
- accessibility attributes
- keyboard interaction where applicable
- dark mode
- RTL

Feature components may use shared UI primitives, but shared UI primitives must remain generic.

## Feature Guidelines

Every feature should be self-contained.

```txt
features/example/
â”œâ”€â”€ sections/
â”œâ”€â”€ components/
â”œâ”€â”€ hooks/
â”œâ”€â”€ services/
â”œâ”€â”€ data/
â”œâ”€â”€ types/
â”œâ”€â”€ constants/
â””â”€â”€ index.ts
```

Feature-specific text, cards, sections, and domain logic stay inside the feature.

Pages do not own feature data. Pages compose feature exports.

Repeated feature patterns should first be extracted inside the feature. Only promote to `shared` when the abstraction is genuinely generic and useful across unrelated domains.

## Import Rules

Use path aliases. Avoid long relative imports.

Required aliases:

```txt
@/app
@/features
@/shared
@/theme
@/lib
@/config
@/assets
@/types
@/utils
```

Every major folder and subfolder should expose an `index.ts` barrel export to keep imports stable.

Do not use deep imports when a barrel export exists.

## Internationalization Rules

The app must be multilingual from day one.

- No visible text may be hardcoded inside components.
- Every label, title, description, button, error message, and toast message must come from translation files or typed dictionaries.
- English and Arabic must be supported initially.
- Additional languages must be addable without restructuring.
- Direction must switch automatically between LTR and RTL.
- Navigation, SEO metadata, validation messages, forms, and page content must be translatable.

i18n belongs in `shared/i18n` and `config/i18n.config.ts`.

## SEO Architecture

SEO configuration is centralized.

Each page should support:

- dynamic title
- description
- keywords
- canonical URL
- Open Graph tags
- Twitter Cards
- Schema.org structured data where applicable

SEO metadata should come from `config/seo.config.ts`, route metadata, or feature data. Pages should apply SEO through a shared hook or utility.

## State Management Rules

Do not introduce global state unless needed.

Use this order:

1. Local component state
2. Context for true global concerns such as language, theme, authentication, and global UI feedback
3. TanStack Query for server state
4. Zustand only if future business requirements justify it

Avoid global state for static content, page composition, or local UI behavior.

## Error Handling

The application must not crash because of an uncaught component error.

Required error architecture:

- React Error Boundary at application level
- route-level error pages
- `NotFoundPage`
- reusable fallback UI
- API error normalization
- global error toast handling
- logging and monitoring hooks through `lib`

Error handling must be user-friendly, accessible, and observable.

## Feature Flags

Feature availability must be configurable through environment variables and centralized config.

Examples:

```txt
VITE_ENABLE_BLOG=true
VITE_ENABLE_CAREERS=true
VITE_ENABLE_CONTACT_FORM=true
VITE_ENABLE_AI_ASSISTANT=false
VITE_ENABLE_DARK_MODE=true
```

Routes, navigation, and optional sections must read feature flags from `config/feature-flags.config.ts`.

Do not hardcode feature availability inside components.

## Integration Abstractions

Future integrations must go through `lib`.

Required abstractions:

- `lib/analytics`
- `lib/logger`
- `lib/monitoring`
- `lib/tracking`
- `lib/error`
- `lib/api`
- `lib/query`
- `lib/storage`

UI code must never depend directly on Google Analytics, Microsoft Clarity, Sentry, PostHog, backend SDKs, or similar providers.

## Security Rules

Security must be considered from the beginning.

- Never expose secrets in frontend code.
- All frontend environment variables must use the appropriate public prefix, such as `VITE_`.
- Never place private API keys, tokens, database credentials, service secrets, or privileged endpoints in client-side code.
- Validate all external data before using it.
- Sanitize user input where applicable.
- Never trust client-side validation alone. Server-side validation is still required for real submissions.
- Keep API communication centralized through the API layer.
- Avoid storing sensitive information in Local Storage unless absolutely necessary.
- Prefer short-lived, least-privilege access patterns for future authenticated features.
- Follow the Principle of Least Privilege.
- Treat CMS, API, analytics, and third-party integration responses as untrusted input.

Security-sensitive logic belongs behind `lib` abstractions or backend services, not scattered through UI components.

## Testing Strategy

The project must be testing-ready from day one.

Testing stack:

- Vitest
- React Testing Library

Testing principles:

- Components receive props and render UI.
- Hooks isolate reusable logic.
- Feature services isolate business behavior.
- Lib services isolate infrastructure behavior.
- Avoid tight coupling to external providers.
- Prefer testing behavior over implementation details.

Future tests should be easy to add without refactoring production code.

## Performance Rules

Performance is part of architecture.

- Lazy load pages.
- Lazy load heavy sections.
- Use route-level code splitting.
- Avoid importing entire libraries.
- Prefer tree-shaking friendly imports.
- Optimize images and keep large assets intentional.
- Use memoization only when it solves a measured or obvious rerender issue.
- Avoid unnecessary client-side JavaScript.
- Monitor bundle size continuously.

## Design System Rules

The design system must be created before page implementation.

It must centralize:

- colors
- semantic tokens
- typography
- spacing
- border radius
- shadows
- icons
- motion
- grid
- container sizes
- breakpoints
- component variants
- dark mode
- RTL-safe layout patterns

Repeated values must live in the theme, config, constants, or typed data. Do not scatter magic values across components.

## Coding Standards

The project must be configured with:

- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint with Conventional Commits
- TypeScript strict mode
- Vitest
- React Testing Library

Every commit should automatically run formatting and linting.

Clean code rules:

- no duplicated logic
- no duplicated JSX
- no oversized files
- no unnecessary abstractions
- no business logic in shared UI
- no direct third-party provider calls from UI
- no hardcoded visible text
- no architecture boundary violations

## Git Workflow

Use Conventional Commits.

Allowed examples:

- `feat:`
- `fix:`
- `refactor:`
- `docs:`
- `style:`
- `test:`
- `chore:`
- `perf:`
- `build:`

Every pull request should:

- build successfully
- pass linting
- pass formatting
- pass tests when available
- preserve architectural boundaries
- avoid duplicated code
- avoid unnecessary dependencies
- include documentation updates when architecture, setup, or usage changes

Automated quality gates should run formatting and linting before commits through Husky and lint-staged.

## Dependency Management

Before adding any new dependency:

- Verify that the functionality cannot be implemented well with existing dependencies.
- Prefer lightweight, actively maintained libraries.
- Prefer tree-shaking friendly packages.
- Avoid libraries with unnecessary bundle size.
- Avoid dependencies that duplicate existing stack capabilities.
- Remove unused dependencies promptly.
- Keep provider-specific dependencies isolated behind `lib` abstractions where possible.

Dependency choices must support long-term maintainability, security, and performance.

## Documentation

The project must maintain:

- `README.md`
- `Architecture.md`
- `Folder Structure.md`
- `Contributing.md`

Documentation should explain how to add pages, features, translations, SEO metadata, feature flags, shared UI components, and integrations.

## Code Review Rules

After each major phase:

- review folder structure
- detect duplicated code
- detect oversized components
- detect architecture violations
- detect hardcoded visible text
- detect missing barrel exports
- detect dependency direction violations
- refactor immediately before continuing

Do not postpone technical debt.

## Future Expansion Strategy

The architecture must support:

- 100+ pages
- 50+ reusable components
- multiple service categories
- portfolio
- blog
- careers
- case studies
- contact system
- multilingual content
- CMS integration
- backend APIs
- analytics
- logging
- monitoring
- AI assistant
- dashboard
- SaaS expansion

Adding a new page should normally require:

1. Add or update feature data/sections.
2. Add a thin page composition file in `app/pages`.
3. Add route metadata in route config.
4. Add translations.
5. Add SEO metadata.
6. Export through barrels.

No restructuring should be required for normal growth.

## Final Principle

Architecture has priority over implementation speed.

Code quality has priority over writing more code.

Maintainability has priority over shortcuts.

Scalability has priority over convenience.

Consistency has priority over individual coding style.

Whenever there is a conflict between speed and architecture, choose the architectural solution.
