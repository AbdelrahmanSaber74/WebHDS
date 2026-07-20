# Definition of Done

A feature is complete only when every item in this checklist is satisfied.

## Architecture

- Follows Feature-Based Architecture.
- Respects dependency rules.
- Has no architectural violations.
- Has no duplicated code.
- Keeps feature-specific code inside the feature.
- Keeps shared code generic and business-agnostic.

## UI

- Uses shared UI primitives wherever applicable.
- Is responsive on mobile, tablet, and desktop.
- Supports Dark Mode.
- Supports RTL and LTR.
- Meets accessibility requirements.
- Uses semantic HTML and proper ARIA only where needed.
- Supports keyboard navigation for interactive elements.

## Internationalization

- Has no hardcoded visible text.
- All user-facing strings come from translation files or typed dictionaries.
- Missing translations fall back gracefully.
- Arabic and English content paths are considered.

## Performance

- Avoids unnecessary re-renders.
- Avoids oversized bundles.
- Uses lazy loading where appropriate.
- Optimizes images and media assets.
- Avoids importing entire libraries when smaller imports are available.

## SEO

- Page metadata is configured.
- Canonical URL is configured.
- Open Graph and Twitter metadata are configured where applicable.
- Structured data is added where applicable.

## Quality

- TypeScript strict mode passes.
- ESLint passes.
- Prettier passes.
- Tests pass.
- Production build passes.

## Testing

- Important business logic is tested.
- Hooks are testable and covered where meaningful.
- Services are testable and covered where meaningful.
- UI tests focus on user-observable behavior.

## Documentation

- Architectural changes are documented.
- New environment variables are documented.
- New feature flags are documented.
- Setup or workflow changes are reflected in README or Contributing docs.

## Review

Before marking a feature complete:

- Check for duplicated code.
- Check for oversized components.
- Check for unnecessary abstractions.
- Check import boundaries.
- Check bundle impact.
- Check for hardcoded visible text.
- Check for accessibility regressions.

A feature is never complete until all checklist items are satisfied.
