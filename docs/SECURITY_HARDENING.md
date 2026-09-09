# Subly Backend Security Hardening

This note tracks the current backend and Telegram Store Bot protections.

## Telegram Bot Cooldowns

The Store Bot uses lightweight in-memory per-user cooldowns to reduce spam and duplicate actions.

Protected actions include:

- Check Payment
- Refresh Stock
- Buy Now
- Wallet and Add Funds
- Orders and Profile
- Product browsing callbacks

Configured by:

```env
BOT_GENERAL_COOLDOWN_SECONDS=2
BOT_PAYMENT_CHECK_COOLDOWN_SECONDS=15
BOT_REFRESH_STOCK_COOLDOWN_SECONDS=5
BOT_BUY_NOW_COOLDOWN_SECONDS=3
```

If a user taps too quickly, the bot replies: `Please wait a few seconds before trying again.`

## Express Rate Limits

The backend uses in-memory IP rate limiting for local and early deployment safety.

Configured by:

```env
RATE_LIMIT_WINDOW_MINUTES=15
RATE_LIMIT_MAX_REQUESTS=100
PAYMENT_CHECK_RATE_LIMIT_WINDOW_MINUTES=10
PAYMENT_CHECK_RATE_LIMIT_MAX_REQUESTS=20
ADMIN_RATE_LIMIT_WINDOW_MINUTES=15
ADMIN_RATE_LIMIT_MAX_REQUESTS=50
```

General routes use the general limit. Payment webhook placeholder routes use the stricter payment limit.

For production with multiple server instances, replace the in-memory limiter with Redis or another shared store.

## Blockchain Request Protection

TRC20 uses TronGrid through the backend only. Every request sends:

- `TRON-PRO-API-KEY`
- `User-Agent`, from `SUBLY_BACKEND_USER_AGENT`

BEP20 prefers `BSC_RPC_URL` when configured. If RPC is unavailable or errors, it falls back to Etherscan API V2 with `chainid=56`.

Both networks use:

- recent transfer cache
- batch matching by network
- expiry checks before polling
- exact amount matching
- txHash reuse prevention

## Idempotency

Payment handling is designed so repeated checks cannot double-process money:

- one `txHash` cannot confirm more than one successful PaymentIntent
- a PaymentIntent can only become `SUCCEEDED` once
- `handlePaymentSucceeded` records `paymentHandledAt`
- wallet deposits are not credited again after `paymentHandledAt`
- orders already `PAID`, `PROCESSING`, or `DELIVERED` are not marked again
- instant account delivery placeholder routing is guarded

Before production, enforce these rules with database unique constraints and transactions.

## Secrets

These values must stay backend-only:

- `SUBLY_STORE_BOT_TOKEN`
- `SUBLY_SUPPORT_BOT_TOKEN`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TRONGRID_API_KEY`
- `BSC_RPC_URL`
- payment provider secrets
- admin secrets

Never put these in React code, public assets, browser localStorage, logs, or screenshots.

## Admin Preparation

When real admin APIs are added:

- require backend role checks
- do not rely only on frontend passcodes or localStorage
- audit product, credential, order, wallet, payment, and promo changes
- never log credential passwords or recovery information

## Shared Verification Service

Telegram Store Bot, web checkout, and web wallet deposits should all use the same backend payment verification services.

The frontend should create or check payment intents through backend endpoints only. It should never verify blockchain payments directly.

## Web Auth And Checkout Guard

The React app can show public browsing pages without login, but protected money/account pages must require auth:

- checkout
- order result pages
- dashboard
- profile
- settings
- orders
- wallet
- referrals
- admin

Shop and product detail pages can remain public so guests can browse before creating an account.

## User Error Messages

User-facing errors should be short and practical:

- show the problem
- give the next step
- avoid raw provider wording when possible

Examples:

- `Too many email requests. Please wait a few minutes before trying again.`
- `This email is already registered. Please log in or reset your password.`
- `Network problem. Check your connection and try again.`

## Cost Controls

Fixed flows should use templates, not AI calls. When AI support is added later:

- cache repeated answers
- set per-user and per-day limits
- log token usage
- use cheaper rule-based answers first
- allow admins to disable expensive features quickly

## High Traffic Plan

For high traffic, do not rely on one Node process or in-memory state:

- move rate limits and bot cooldowns to Redis
- move payment intents, orders, and wallets fully to Supabase/PostgreSQL
- use database transactions for wallet credits and debits
- add background workers for payment checks and delivery
- use connection pooling for Postgres
- keep frontend static on Vercel or similar edge hosting

## Wallet Safety

Wallet balances must never be set from the frontend. A valid deposit flow is:

1. Backend creates a payment intent.
2. User pays.
3. Backend verifies provider or blockchain payment.
4. Backend writes a payment record with an idempotency key or tx hash.
5. Backend credits the wallet ledger inside a transaction.
6. Balance is calculated from trusted wallet records.

Direct order payment should mark the order paid without increasing wallet balance.
