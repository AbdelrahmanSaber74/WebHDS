# Environment

## Principles

- Never expose secrets in the frontend.
- Only variables prefixed with `VITE_` are available to client code.
- Client-side flags are for experience configuration, not authorization.
- Backend and CRM secrets must live on the server or deployment platform, never in this repository.

## Public Variables

| Variable                   | Required | Default               | Purpose                                                                                      |
| -------------------------- | -------- | --------------------- | -------------------------------------------------------------------------------------------- |
| `VITE_APP_NAME`            | Yes      | `HDS`                 | Public application name used in SEO titles and branding.                                     |
| `VITE_APP_URL`             | Yes      | `https://hds.example` | Canonical production origin for SEO utilities. Set to `https://nofalseo.com` for production. |
| `VITE_DEFAULT_LOCALE`      | Yes      | `en`                  | Initial locale fallback. Supported values are currently `en` and `ar`.                       |
| `VITE_API_BASE_URL`        | No       | `/api`                | Base URL for future backend API calls.                                                       |
| `VITE_ENABLE_BLOG`         | No       | `true`                | Future blog feature flag.                                                                    |
| `VITE_ENABLE_CAREERS`      | No       | `true`                | Future careers feature flag.                                                                 |
| `VITE_ENABLE_CONTACT_FORM` | No       | `true`                | Enables contact form experience when wired to runtime checks.                                |
| `VITE_ENABLE_AI_ASSISTANT` | No       | `false`               | Future AI assistant feature flag.                                                            |
| `VITE_ENABLE_DARK_MODE`    | No       | `true`                | Enables dark-mode experience when wired to runtime checks.                                   |

## Production Example

```bash
VITE_APP_NAME=HDS
VITE_APP_URL=https://nofalseo.com
VITE_DEFAULT_LOCALE=en
VITE_API_BASE_URL=/api
VITE_ENABLE_BLOG=true
VITE_ENABLE_CAREERS=true
VITE_ENABLE_CONTACT_FORM=true
VITE_ENABLE_AI_ASSISTANT=false
VITE_ENABLE_DARK_MODE=true
```

## Security Notes

- Do not store API tokens, CRM credentials, analytics secrets, private keys, or service account credentials in `.env` files consumed by Vite.
- If an integration needs a secret, create a backend endpoint or serverless function and call it through the centralized API layer.
- Treat client-side validation as user experience only; the backend must validate all submitted lead data again.
