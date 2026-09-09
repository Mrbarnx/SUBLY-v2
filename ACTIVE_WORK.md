# ACTIVE_WORK.md

## Active Stage

Subly V2 Frontend — Batch 2

Checkout + Order Results

## Screens

Implement only:

1. Checkout `/checkout`
2. Order Success `/order/success`
3. Order Failed `/order/failed`

## Objective

Build the complete frontend checkout journey using the supplied UI references and matching `.md` specifications.

This is frontend-only.

No real payment, database, authentication provider, Supabase, Telegram, or backend integration exists in this batch.

## Existing Foundation

Already completed:

- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS 4
- TanStack Query
- React Hook Form
- Zod
- shared UI primitives
- public layout
- mock product services
- cart provider
- Homepage
- How It Works
- Shop
- Product Detail
- Cart

Reuse the existing architecture.

Do not rebuild Batch 1.

## Visual Sources

Use:

- docs/ui-redesign/00_DESIGN_SYSTEM.md
- docs/ui-redesign/06_CHECKOUT.md
- docs/ui-redesign/07_ORDER_SUCCESS.md
- docs/ui-redesign/08_ORDER_FAILED.md

Use the corresponding reference screenshots as visual source of truth.

## Functional Flow

Cart
→ Checkout
→ validate checkout form
→ create mock order
→ clear cart only after successful mock order creation
→ navigate to Order Success

Also support a controlled mock failure path for testing Order Failed.

## Checkout Requirements

Use the existing cart state.

Display:

- order items
- quantities
- prices
- subtotal
- applicable summary values from mock data
- customer information form
- payment method selection UI if required by reference
- terms/consent
- Place Order / Continue button

Use React Hook Form + Zod for checkout validation where appropriate.

Do not duplicate cart calculations inside multiple components unnecessarily.

## Payment Rules

Payment methods are PRESENTATION ONLY.

Allowed visual options may include:

- Subly Balance
- USDT TRC20
- USDT BEP20
- Bank Transfer
- Binance Pay
- Bybit Pay
- Telegram Stars

But do NOT implement:

- blockchain verification
- wallet debits/credits
- payment APIs
- bank verification
- payment webhooks
- real receiving addresses
- private keys
- screenshots as payment confirmation

Clearly mark unsupported methods as demo/coming soon if the reference requires them.

Never hardcode real payment secrets or addresses.

## Mock Order Architecture

Create/use typed order service abstraction.

Suggested API:

orderService.createOrder(payload)

For this frontend batch, use a mock implementation.

Order should include enough frontend data for:

- reference
- items
- totals
- status
- customer
- payment method
- createdAt

Do not put backend-only business logic into the page.

## Order Success

Use mock order data passed through safe frontend state/query/reference.

Display only information actually available from the mock order.

Do not claim a real payment was verified.

The screen may state that this is a demo/frontend order state if needed.

## Order Failed

Support a realistic frontend error state.

Include:

- clear failure message
- retry checkout
- return to cart
- support/help link where specified

Do not fabricate a provider failure response.

## Empty / Invalid State

If Checkout is opened with an empty cart:

- show a proper empty state
- provide navigation back to Shop/Cart

If Order Success/Failed has no usable order context:

- show a safe fallback state
- do not display fabricated order information

## Locked Batch 1

Do not redesign:

- Homepage
- How It Works
- Shop
- Product Detail
- Cart

Shared components may only be changed if the change is backward compatible.

## Not In Scope

Do not implement:

- Signup/Login
- Auth provider
- Dashboard
- Orders account page
- Profile
- Settings
- Wallet
- Referrals
- Admin
- Legal pages
- Backend
- Supabase
- PostgreSQL
- Prisma
- Telegram
- real payments

## Responsive

Support:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px

No horizontal overflow.

Checkout summary/actions must remain usable on narrow screens.

## Quality

Maintain:

- semantic forms
- labels
- keyboard navigation
- visible focus
- validation errors
- disabled/loading states
- meaningful error messaging
- responsive layouts

## Verification

Run:

npm run build
npm run lint

## Completion Report

Return only:

1. Screens implemented
2. Files changed
3. Checkout/order architecture
4. Validation and mock-order behavior
5. Navigation behavior
6. Responsive status
7. Build/lint results
8. Remaining blockers

STOP after Batch 2.

Do not start authentication screens.