# Production Checklist

Use this checklist before every production release.

## Build Gates

- Run `npm run ci` and verify typecheck, lint, format, tests, and production build pass.
- Verify no `TODO`, `FIXME`, temporary code, debug logs, or dead feature stubs are introduced.
- Verify feature code stays inside its feature and shared code remains business-agnostic.

## Routes

- `/` renders Home with translated content, SEO metadata, and no visible raw translation keys.
- `/services` renders the services listing with lazy route loading.
- `/services/:slug` renders valid service detail pages and invalid slugs use the established not-found experience.
- `/about` renders Company Domain-backed storytelling content.
- `/portfolio` renders search and filterable project content.
- `/portfolio/:slug` renders valid case studies and invalid slugs use the established not-found experience.
- `/contact` renders company-backed offices, contact methods, lead form states, and schema metadata.
- Unknown routes render the 404 route.

## SEO

- `index.html` includes default robots metadata, viewport, theme color, description, and favicon.
- `public/robots.txt` allows crawling and references `public/sitemap.xml`.
- `public/sitemap.xml` lists all production marketing routes.
- Each route applies dynamic title, description, keywords, canonical URL, Open Graph tags, and Twitter cards through the centralized SEO utilities.
- Detail pages generate service or case-study structured data.
- Breadcrumbs render schema.org `BreadcrumbList` where PageHero breadcrumbs are used.

## Internationalization

- English and Arabic dictionaries have identical key structures.
- `document.documentElement.lang` and `dir` update when language changes.
- No component renders raw translation keys.
- Proper nouns and technical product names may remain untranslated intentionally.

## Accessibility

- Pages use one `main` landmark and route-level `h1` headings.
- Navigation, drawer, forms, and interactive controls are keyboard accessible.
- Form errors use accessible messages and invalid fields can receive focus.
- Links and buttons have visible focus styles.
- Contrast must remain WCAG AA or better after theme changes.

## Performance

- Routes remain lazy loaded.
- Heavy page sections and icons are imported through tree-shakeable imports.
- Images are optimized and served from `assets` or `public` intentionally.
- Bundle growth should be reviewed after every feature; investigate any new route chunk above the current baseline.

## Error Handling

- React Error Boundary remains active at app level.
- Router error page renders a fallback instead of crashing.
- 404 route handles unknown URLs.
- Contact repository failures render a retryable state.
- Missing content should use established empty or error states rather than throwing in UI.

## Final Approval

A release is production-ready only when all items above pass and `npm run ci` is green.
