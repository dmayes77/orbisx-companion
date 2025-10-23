# 🧩 OrbisX Companion App

**OrbisX Companion** is a multi-tenant SaaS platform built to help OrbisX clients customize and style their booking forms using professionally designed, Bootstrap-based templates.

It lets users configure form headers, services, and package sections — then generate copy-and-paste code blocks that can be embedded in OrbisX sites.

---

## 🚀 Overview

**App Structure:**

| Area           | Domain                              | Purpose                                   |
| -------------- | ----------------------------------- | ----------------------------------------- |
| Marketing Site | `orbisx-companion.app`              | Landing page, pricing, and sign-up        |
| Tenant Area    | `businessname.orbisx-companion.app` | Dashboard for styling and code generation |

Each tenant gets an isolated workspace with templates, previews, and Supabase-backed authentication.

---

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router, JavaScript)
- **UI Framework:** Bootstrap 5.3
- **Database & Auth:** Supabase (Magic Link auth)
- **Payments:** Stripe Checkout
- **Hosting:** Vercel (supports wildcard subdomains)
- **Storage:** Supabase Storage for preview images and assets

---

## 🧠 Core Features

- Pre-built header, service, and package templates
- Code block generation for easy embedding into OrbisX forms
- Supabase Magic Link authentication
- Stripe subscription tiers (Monthly, 6-Month, Lifetime)
- Multi-tenant subdomains (`tenantslug.orbisx-companion.app`)
- Bootstrap-only styling with global and scoped CSS modules

---

## 💰 Pricing Tiers

| Tier         | Duration | Price | Ideal For                               |
| ------------ | -------- | ----- | --------------------------------------- |
| **Monthly**  | 1 Month  | $69   | Short-term use or initial styling setup |
| **6-Month**  | 6 Months | $329  | Extended testing & refinement           |
| **Lifetime** | Lifetime | $658  | Frequent updates & seasonal adjustments |

---

## 🎨 Styling Strategy

### Global CSS

Located at `styles/globals.css` (imported from `app/layout.js`).

Used for base reset, Bootstrap variable overrides, typography, spacing tokens, and small utilities.

### Scoped CSS Modules

Each page or feature has its own `.module.css` file, imported into the component.

Examples:

```
app/sign-up/signup.module.css
app/(tenant)/tenant/[slug]/dashboard/dashboard.module.css
app/(tenant)/tenant/[slug]/templates/templates.module.css
```

Example usage:

```jsx
import styles from './signup.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.signupForm}>
      <h2>Create your account</h2>
      {/* Sign-up form */}
    </div>
  );
}
```

## Authentication Flow

User visits `/sign-up` → enters business name, subdomain, and email. Supabase sends a Magic Link for verification. On verification a tenant record is created and the user is redirected to `businessname.orbisx-companion.app/tenant/[slug]/dashboard`.

## Billing Flow

Stripe Checkout sessions are created via `/api/checkout`. Webhooks (`/api/webhooks/stripe`) update Supabase when payment succeeds. Access duration or lifetime flags are stored per-tenant.

## Development

Prerequisites

- Node.js ≥ 18
- Supabase Project + Service Role Key (server)
- Stripe Test Keys
- Vercel CLI (optional)

Environment variables

Copy `.env.local.example` → `.env.local` and fill in your keys. Prefer server-only keys for sensitive operations.

Recommended variables (example):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_BASE_URL=https://orbisx-companion.app
```

Notes:

- Keep secret keys (service role, stripe secret) on the server only. Do not expose them to browser bundles.
- `lib/supabaseClient.js` should export a singleton Supabase client. If it's currently empty, create one using `createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)` for client code, and use the service role key only in server-side helpers.
- Multi-tenant subdomain routing is implemented with `proxy.js` (it rewrites host-based requests to the tenant routes under `app/(tenant)/tenant/[slug]`). To test subdomain routing locally, either edit `/etc/hosts` to map subdomains to `localhost` or use a tunneling tool.
