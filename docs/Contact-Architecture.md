# Contact Architecture

## Purpose

The Contact feature owns lead capture and contact-page presentation. It is designed so a future backend, CRM, REST API, GraphQL API, or Headless CMS can replace local data and the mock lead repository without changing UI components.

## Flow

1. `ContactPage` is an app-level composition route and renders `ContactFeature` only.
2. `ContactFeature` reads marketing content through `useContactContent()` and company data through the Company Domain hooks.
3. Sections receive typed props and render with shared UI primitives.
4. `ContactForm` validates user input with Zod through React Hook Form.
5. `useContactForm()` converts valid form values into a `ContactRequest`, tracks abstract analytics events, and submits through `contactService.submitLead()`.
6. `contactService` delegates submission to a `ContactRepository` implementation.
7. The current repository is `createMockContactRepository()`. Future production implementations can call REST, GraphQL, or CRM APIs behind the same contract.

## Repository Contract

`ContactRepository` exposes one method:

```ts
submitLead(request: ContactRequest): Promise<Lead>
```

The UI does not know whether the repository is local, REST-based, GraphQL-based, or CRM-backed.

## Future Backend Integration

To connect a backend:

1. Create a new repository implementation inside `features/contact/repository`.
2. Normalize backend errors into user-safe failure states.
3. Keep validation on the client for UX, but validate again on the server.
4. Pass the production repository to `contactService.submitLead()` through dependency injection or environment-aware configuration.
5. Keep analytics vendor-agnostic by sending events through `lib/analytics` only.

## CRM Integration Points

The `ContactRequest` model already includes lead source, inquiry type, qualification fields, newsletter consent, and message context. A CRM adapter can map these fields to HubSpot, Salesforce, Dynamics, or a custom backend without changing form components.

## Company Domain Dependency

The Contact feature never duplicates office, phone, email, working-hour, or address data. It consumes the Company Domain as the canonical organization data source.

## Quality Gates

Contact must continue to pass:

- TypeScript strict checks
- ESLint
- Prettier
- Vitest
- Production build
