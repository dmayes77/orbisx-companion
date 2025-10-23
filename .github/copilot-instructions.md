## Repository snapshot

- Framework: Next.js (app router). See `app/layout.js` and top-level `app/` directory for routes.
- Primary integrations: Supabase (see `package.json` dependency `@supabase/supabase-js`) and Stripe (`stripe` dependency and `app/api/webhooks/stripe/route.js`, `app/api/checkout/route.js`).
- Data/templates live under `data/templates/*.json` and are surfaced by components under `components/` and `app/(tenant)/tenant/...` routes.

## Purpose & Overview

OrbisX Companion is a multi-tenant Next.js app that helps clients style booking forms using predesigned Bootstrap templates. Key features:

- Multi-tenant routing via subdomains (e.g., businessname.orbisx-companion.app)
- Supabase magic link auth and session management
- Stripe-based pricing tiers (Monthly $69, 6-Month $329, Lifetime $658)
- Bootstrap 5.3-based templates for headers, services, and packages
- Copy-paste code block generation for styled forms

## High-level architecture — what to know quickly

- This is an app-router Next.js project (React 19, Next 16). Route files live in `app/`. Top-level layout is `app/layout.js` and tenant-specific routes live under `app/(tenant)/tenant/[slug]/`.
- Server/edge functions: API routes use the Next `app/api/.../route.js` convention (see `app/api/checkout/route.js` and `app/api/webhooks/stripe/route.js`). Treat these as canonical server-side integration points for payments and webhooks.
- Client components and shared UI live in `components/` (e.g., `TemplateCard.js`, `TenantSidebar.js`). Some files are intentionally minimal/placeholder — check file contents before assuming behavior.
- Lib helpers under `lib/` (e.g., `db.js`, `tenant.js`, `templating.js`, `pricing.js`, `supabaseClient.js`, `auth.js`) are the place to implement business logic and external API wrappers.

## Project-specific conventions & patterns

- App router patterns: use nested `layout.js` files to share UI across tenant routes. Example: tenant pages are grouped under `app/(tenant)/tenant/[slug]/`.
- Data seeding / templates: template JSON lives in `data/templates/` (e.g., `data/templates/header.json`) and is consumed by `lib/templating.js` and template components.
- Integration points:
  - Supabase: referenced in `package.json`; Supabase client wrapper should live in `lib/supabaseClient.js` (currently a placeholder).
  - Stripe: server-side interactions belong in `app/api/checkout/route.js` and webhook processing in `app/api/webhooks/stripe/route.js`.
- Environment variables: secrets for Supabase and Stripe are expected to be read from `process.env` in server-side code. Search for `process.env` to find where to wire values.

## Stack-specific guidance (concise)

- Next.js App Router (JS):

  - Marketing routes: Single-page landing (`app/page.js`) + sign-up flow (`app/sign-up/page.js`)
  - Tenant routes: All under `app/(tenant)/tenant/[slug]/**/*`
  - Proxy: `proxy.js` handles subdomain -> slug rewrites (replaces deprecated middleware)
  - Coding style: Modern JS (ES2023), 2-space indent, trailing commas ok, no semicolons
  - Imports: Use @/ alias for absolute paths

- Supabase (DB + Auth):

  - Auth flow: Business name + subdomain + email -> Magic link -> Create tenant -> Redirect to subdomain
  - Expected env vars: `SUPABASE_URL`, `SUPABASE_KEY` (service role or anon depending on use). Keep keys server-side. Implement a singleton client in `lib/supabaseClient.js` using `createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)`.
  - Auth flows should be handled server-side or in API routes. If adding client auth flows, ensure only the anon key is exposed to browser code and sensitive operations use server endpoints.

- Stripe (Payments + Webhooks):

  - Expected env vars: `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` (used by `app/api/webhooks/stripe/route.js`). Verify webhook signatures using Stripe's `constructEvent`/`webhooks` helpers in server code.
  - For local webhook testing use the Stripe CLI forwarding and the project webhook secret; implement idempotency checks when writing to `lib/db.js` or `lib/tenant.js`.

- Bootstrap 5 (UI):

  - Use Bootstrap 5.3 classes first (container/row/col, spacing utilities)
  - Global styles: `app/globals.css` for resets, Bootstrap overrides, base typography
  - Page styles: `.module.css` files for component-specific CSS only
  - Avoid Tailwind or other CSS frameworks

- Multi-tenant SaaS patterns:
  - Tenants are surfaced by sluged routes under `app/(tenant)/tenant/[slug]/`. Tenant-specific logic (settings, templates) should live in `lib/tenant.js` and tenant pages should import tenant helpers.
  - Keep tenant-scoped data fetching server-side and pass the tenant id/slug down as props to client components. Avoid leaking tenant context between requests.

## CSS & Styling Rules

- Global CSS (`app/globals.css`):

  - Bootstrap variable overrides (--bs-\* tokens)
  - Base typography and spacing
  - Form element tweaks
  - No site-wide selectors in other files

- CSS Modules (`.module.css`):
  - One per page/feature
  - Local styles only, no global selectors
  - Example paths & classes:
    - `app/sign-up/signup.module.css`: .signupForm, .cta, .planCard
    - `app/(tenant)/tenant/[slug]/dashboard/dashboard.module.css`: .header, .card, .grid
    - `app/(tenant)/tenant/[slug]/templates/templates.module.css`: .templateGrid, .preview, .controls

## Typical developer workflows (commands)

- Start local dev server: `npm run dev` (runs `next dev`).
- Build for production: `npm run build` (runs `next build`).
- Lint: `npm run lint` (runs `eslint`).

Note: repository uses the default Next.js scripts from `package.json`. If you need environment variables for Supabase/Stripe, set them in your shell or `.env.local` before running `dev` or `build`.

## Where to implement features or fixes

- New server integrations (payments, webhooks): add logic under `app/api/*/route.js` and helper functions to `lib/`.
- Authentication and session handling: implement or extend `lib/auth.js` and `lib/supabaseClient.js`. Prefer keeping auth only on server-side code or API routes.
- Templates and tenant customization: modify `data/templates/*` and `lib/templating.js` for transformation logic, and update `components/TemplateCard.js` or tenant pages under `app/(tenant)/tenant/[slug]/` for presentation.

## Examples of repository-specific tasks and where to change

- Add a new tenant-level page: create `app/(tenant)/tenant/[slug]/newpage/page.js` and export a default React component. Use the existing `layout.js` in that folder for shared layout.
- Wire a Stripe webhook: update `app/api/webhooks/stripe/route.js` to verify Stripe signatures using `process.env.STRIPE_WEBHOOK_SECRET` and call into `lib/db.js` or `lib/tenant.js` to update state.
- Initialize Supabase client: implement `lib/supabaseClient.js` to export a singleton created with `createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)` and import it in server modules.

## Things AI agents should check before making edits

- Confirm a file isn't a placeholder: many `lib/` and component files are empty — open them first.
- Prefer server-side changes for secret-handling code (API routes, `lib/` used only server-side). Don't embed secrets in client bundles.
- Match existing style: follow simple JS/React style in this repo (functional components, default exports). Avoid adding heavy toolchain changes unless requested.

## Quick testing & local-run tips

- Start dev server: `npm run dev`. If you need environment variables locally, create a `.env.local` in the project root with keys like:

  SUPABASE*URL=your_supabase_url
  SUPABASE_KEY=your_supabase_key
  STRIPE_SECRET_KEY=sk_test*...
  STRIPE*WEBHOOK_SECRET=whsec*...

- Stripe webhook testing: run `stripe listen --forward-to localhost:3000/api/webhooks/stripe` (or the equivalent) and set `STRIPE_WEBHOOK_SECRET` to the signing secret reported by the CLI.

## Short FAQs for agents

- Q: Where do I wire in Supabase or Stripe secrets? A: Only in server modules (`app/api/*/route.js` or `lib/*`) and read via `process.env`. Example: implement `lib/supabaseClient.js` and import it in server routes.
- Q: Can I add client-side env usage? A: No — avoid exposing service keys. Use only public/anon keys client-side and put sensitive calls behind API routes.
- Q: How to style components? A: Use Bootstrap classes first (grid, utilities). Add minimal custom CSS in page-level .module.css files.
- Q: Where to put new components? A: Reusable UI in `components/`, tenant pages under `app/(tenant)/tenant/[slug]/`.

## Key files to reference & maintain

Frontend:

- `app/layout.js` - Root layout & fonts
- `app/globals.css` - Bootstrap overrides & base styles
- `app/page.js` - Marketing landing
- `app/sign-up/page.js` - Tenant signup flow

Tenant area:

- `app/(tenant)/tenant/[slug]/layout.js` - Tenant chrome
- `app/(tenant)/tenant/[slug]/dashboard/page.js` - Tenant home
- `app/(tenant)/tenant/[slug]/templates/{header,service,package}/page.js` - Template editors

Integration:

- `lib/supabaseClient.js` - DB/auth singleton
- `lib/auth.js` - Magic link flow
- `app/api/checkout/route.js` - Stripe Checkout
- `app/api/webhooks/stripe/route.js` - Payment hooks
- `proxy.js` - Subdomain handling (replaces deprecated middleware)

## Quick references (files to inspect)

- app/layout.js — global layout, font usage
- app/(tenant)/tenant/[slug]/layout.js — tenant-level layout
- app/api/checkout/route.js — checkout server route
- app/api/webhooks/stripe/route.js — Stripe webhook route
- lib/supabaseClient.js, lib/auth.js — auth & DB client stubs
- lib/templating.js, data/templates/\* — template data and transformation
- components/TemplateCard.js, components/TenantSidebar.js — UI patterns

## Behavior to avoid

- Don't add client-side references to secrets (SUPABASE_KEY, STRIPE_SECRET). Keep them in server code only.
- Avoid changing the Next app-router structure to pages/ unless explicitly asked; this repo uses the app directory.

---

If you'd like, I can: (a) merge any existing instructions into this file, (b) expand examples for Stripe webhook verification code, or (c) scaffold a working `lib/supabaseClient.js` and `lib/auth.js` wired to env vars. Which would you prefer next?
