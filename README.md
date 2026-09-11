# Subly V2

Subly is a responsive digital-access marketplace frontend covering public commerce, checkout and mock order results, authentication demonstrations, customer account tools, admin operations, and legal pages.

## Status

Frontend only. Products, orders, wallet activity, account data, and referrals are supplied by typed mock service implementations. Supabase, backend APIs, real authentication, payments, Telegram, and production upload storage are not integrated.

## Stack

- React 19 and TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form and Zod
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Quality and production checks:

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` includes TypeScript project validation before the Vite production build.

## Architecture

- `src/app/` — application providers and route configuration
- `src/pages/` — route-level screens, lazy-loaded by major route family
- `src/components/` — shared layouts, UI, storefront, checkout, account, and feedback components
- `src/features/cart/` — cart context, provider, and hook
- `src/services/contracts.ts` — replaceable service interfaces
- `src/services/mock/` — frontend-only mock implementations
- `src/types/` — shared domain models
- `src/data/` — catalog and legal presentation data
- `public/brand/` and `public/app-icon/` — local Subly and application assets

Future backend work should implement the existing service contracts rather than embedding data access in page components.
