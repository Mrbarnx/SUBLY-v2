# ACTIVE_WORK.md

## Active Stage

Subly V2 Frontend — Batch 1

Public Storefront

## Screens

Implement:

1. Homepage `/`
2. How It Works `/how-it-works`
3. Shop `/shop`
4. Product Detail `/product/:slug`
5. Cart `/cart`

## Objective

Recreate the five approved UI screens as closely as reasonably possible using the matching screenshots and `.md` files.

The screenshots are the visual source of truth.

The `.md` files describe responsive, interaction and implementation requirements.

## Current Architecture

The Subly V2 frontend foundation is complete.

Already available:

- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS 4
- TanStack Query
- React Hook Form
- Zod
- shared UI primitives
- PublicLayout
- typed product/category/cart models
- mock product services
- cart provider

Use the existing foundation.

Do not rebuild it.

## Data

This stage remains frontend-only.

Use typed mock data and existing mock services.

Do not add:

- Supabase
- backend API
- database
- real authentication
- payments
- Telegram

Do not hardcode mock data directly inside page components when an existing mock service/data layer can provide it.

## Functional Journey

A user must be able to:

Homepage
→ browse Shop
→ search/filter products
→ open Product Detail
→ add product to Cart
→ open Cart
→ update quantity
→ remove product
→ continue shopping

All internal links must use React Router.

## Visual Rules

Use:

docs/ui-redesign/00_DESIGN_SYSTEM.md

and the corresponding screen reference for each route.

Do not invent another visual direction.

Do not make one screen visually inconsistent with another.

## Responsive

Every screen must work at:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px

No horizontal overflow.

## Protected Areas

Do not implement:

- Checkout
- Order Result pages
- Authentication screens
- Account screens
- Admin
- Backend
- Supabase
- Payments
- Telegram

Do not stage, commit or push.

## Completion

Stop after Batch 1.

Return a concise report with:

1. Files changed
2. Screens implemented
3. Shared components added/reused
4. Functional navigation/cart behavior
5. Responsive status
6. Build/lint results
7. Remaining visual differences/blockers