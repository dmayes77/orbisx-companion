# OrbisX Companion

OrbisX Companion is a multi-tenant Next.js app that helps clients style booking forms using pre-designed Bootstrap templates and easy copy-paste code blocks.

This README covers quick setup, architecture notes, conventions, and where to make common changes.

---

## Quick start

Clone the repo and install dependencies:

```bash
npm install
```

Create a `.env.local` at the project root with the following (example) variables:

```
SUPABASE_URL=https://your-supabase-url
SUPABASE_KEY=your-supabase-service-role-or-anon
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000

---

## Architecture overview

- Framework: Next.js App Router (Next 16)
- Styling: Bootstrap 5 + CSS Modules. Global theme lives in `styles/globals.css`.
- Multi-tenant routing: Subdomain-based tenant routing (e.g., `business.orbisx-companion.app`) using `proxy.js` which rewrites requests to `app/(tenant)/tenant/[slug]/*`.
- Integrations:
  - Supabase for auth and persistence (`lib/supabaseClient.js`, `lib/auth.js`)
  - Stripe for checkout and webhooks (`app/api/checkout/route.js`, `app/api/webhooks/stripe/route.js`)
- Data/templates: `data/templates/*` contain header/service/package templates.

---

## Key folders

- `app/` — Next.js app routes and layouts (app router). Tenant routes live under `app/(tenant)/tenant/[slug]/`.
- `components/` — Reusable UI. Organized into subfolders: `common/`, `layout/`, `pricing/`, `templates/`.
- `styles/` — Global stylesheet `styles/globals.css` and other global assets.
- `lib/` — Helpers and integrations (auth, db, templating, tenant logic).
- `data/` — Template JSON files.
- `config/` — Small configuration like pricing plans.

---

## Conventions & notes

- Keep global tokens and theme in `styles/globals.css`.
- Use CSS Modules (`*.module.css`) for component/page-specific styles.
- Reusable components live in `components/common` and are imported with absolute alias `@/components/...`.
- Avoid exposing secrets in client code. Use server-only code (`app/api/*/route.js` or `lib/`) for secret access.

---

## Local development tips

- To test tenant routing locally, use hosts entries or a tunneling tool to simulate subdomains (or use `localhost` with custom logic).
- For Stripe webhook testing use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## How to make common changes

- Add a new tenant page: `app/(tenant)/tenant/[slug]/newpage/page.js`.
- Add a new reusable component: `components/common/MyComponent/index.js` and `components/common/MyComponent/my-component.module.css`.
- Update global theme tokens: `styles/globals.css`.
- Add a new template: `data/templates/<template>.json` and wire it into `lib/templating.js`.

---

## Troubleshooting

- If styles look off, ensure `styles/globals.css` is imported in `app/layout.js` and there is no other conflicting global CSS.
- If subdomain routing doesn't work locally, verify `proxy.js` is present and your environment simulates the hostname.

---

If you'd like, I can add examples for deploying to Vercel, or scaffold tests and CI next. Let me know which you'd prefer.
