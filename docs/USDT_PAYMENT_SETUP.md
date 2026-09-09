# Subly USDT Payment Setup

This guide covers Phase 5C for automatic USDT TRC20 and BEP20 payment confirmation in the Subly Store Bot.

## What Self Monitoring Means

Subly does not move funds or hold private keys in this phase. The bot only monitors public blockchain activity for configured receiving addresses. When a matching incoming USDT transaction is found, the bot confirms the related payment intent.

## TRC20 And BEP20

TRC20 means USDT on the TRON network.

BEP20 means USDT on BNB Smart Chain.

They are different networks. A user must send to the correct address on the correct network.

## Required Environment Variables

```env
# App
NODE_ENV=development
PORT=4000
APP_BASE_URL=http://localhost:4000
DEFAULT_CURRENCY=USD
SUBLY_BACKEND_USER_AGENT=SublyBackend/1.0

# Telegram
SUBLY_STORE_BOT_TOKEN=
SUBLY_SUPPORT_BOT_TOKEN=
ADMIN_TELEGRAM_CHAT_ID=
ADMIN_TELEGRAM_IDS=

# USDT Receiving Addresses
USDT_TRC20_RECEIVE_ADDRESS=
USDT_BEP20_RECEIVE_ADDRESS=

# TRON / TRC20
TRONGRID_API_KEY=
TRON_API_BASE_URL=https://api.trongrid.io
USDT_TRC20_CONTRACT_ADDRESS=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t

# BEP20 / BNB Smart Chain via Etherscan API V2
BSCSCAN_API_KEY=
BSCSCAN_API_BASE_URL=https://api.etherscan.io/v2/api
BSC_CHAIN_ID=56
BSC_RPC_URL=

# USDT Payment Settings
USDT_PAYMENT_CONFIRMATION_MINUTES=30
USDT_POLL_INTERVAL_SECONDS=60
USDT_MIN_CONFIRMATIONS=1
USDT_TRANSFER_CACHE_TTL_SECONDS=45
USDT_BACKGROUND_POLLING_ENABLED=false
USDT_AUTO_POLL_DELAY_SECONDS=120
USDT_USE_UNIQUE_AMOUNTS=true
USDT_UNIQUE_AMOUNT_MAX_CENTS=30

# Future Database
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Use `BSCSCAN_API_KEY`. Do not use the misspelled `BSCSAN_API_KEY`.

## TRC20 Receiving Address

1. Create or choose a TRON wallet you control.
2. Copy its public USDT TRC20 receiving address.
3. Add it to `.env` as `USDT_TRC20_RECEIVE_ADDRESS`.
4. Never add a private key to this project.

## BEP20 Receiving Address

1. Create or choose a BNB Smart Chain wallet you control.
2. Copy its public USDT BEP20 receiving address.
3. Add it to `.env` as `USDT_BEP20_RECEIVE_ADDRESS`.
4. Never add a private key to this project.

## TronGrid API Key

1. Create a TronGrid account.
2. Generate an API key.
3. Add it to `.env` as `TRONGRID_API_KEY`.
4. Keep `TRON_API_BASE_URL=https://api.trongrid.io` unless you are using another compatible TRON API.
5. Keep `SUBLY_BACKEND_USER_AGENT=SublyBackend/1.0` unless you set a custom backend identifier.

The backend sends `TRON-PRO-API-KEY` and `User-Agent` headers with every TronGrid request. Never call TronGrid directly from the React frontend.

## Etherscan V2 For BNB Smart Chain

For the current scanner, use the Etherscan API V2 endpoint with BNB Smart Chain selected by `chainid=56`:

1. Create an Etherscan API key that supports API V2.
2. Generate an API key.
3. Add it to `.env` as `BSCSCAN_API_KEY`.
4. Keep `BSCSCAN_API_BASE_URL=https://api.etherscan.io/v2/api`.
5. Keep `BSC_CHAIN_ID=56`.

The env variable name remains `BSCSCAN_API_KEY` for now, but the key may come from Etherscan API V2.

If `BSC_RPC_URL` is configured, the BEP20 checker will use BSC RPC log scanning first. If RPC fails, it can fall back to Etherscan API V2 when `BSCSCAN_API_KEY` is configured.

If Etherscan API V2 returns unsupported chain, endpoint, or rate-limit errors, keep the payment pending and configure `BSC_RPC_URL` for a direct RPC scanner path.

## Testing Wallet Deposit

1. Start the bot locally with `npm run dev`.
2. In Telegram, open Wallet.
3. Choose Add Funds.
4. Enter a small amount, for example `5`.
5. Choose USDT TRC20 or USDT BEP20.
6. Send the exact amount shown by the bot to the shown address on the correct network.
7. Tap Check Payment after the transaction is visible on chain.

Use a small test amount first.

## Payment Request UX

The MVP flow is user-driven:

1. The bot creates a payment request and shows the exact amount and address.
2. The backend does not immediately spam blockchain checks.
3. The user taps Check Payment after paying.
4. The backend checks the blockchain only when needed.
5. If background polling is enabled, it runs slowly and waits before checking new requests.
6. Expired or cancelled requests stop checking completely.

This reduces wasted TronGrid, BSC RPC, and Etherscan API calls when users create deposit requests but never pay.

Configure background polling with:

```env
USDT_BACKGROUND_POLLING_ENABLED=false
USDT_AUTO_POLL_DELAY_SECONDS=120
USDT_POLL_INTERVAL_SECONDS=60
```

When `USDT_BACKGROUND_POLLING_ENABLED=false`, only the Check Payment button performs blockchain checks.

When enabled, automatic polling skips newly created PaymentIntents until they are at least `USDT_AUTO_POLL_DELAY_SECONDS` old.

Users can also cancel a pending payment request. Cancelled requests are never checked again.

## Testing Direct Order Payment

1. Open Products.
2. Choose Activation Services.
3. Select a product.
4. Continue to payment.
5. Choose USDT TRC20 or USDT BEP20.
6. Send the exact amount shown.
7. Tap Check Payment.

For direct order payments, the wallet balance is not credited. The order is marked paid after confirmation.

## Why Unique Amounts Help

If many users send the same amount to the same receiving address, it is hard to match each deposit to the right payment intent.

Unique amounts add a small extra decimal amount, such as `5.13` instead of `5.00`, so the scanner can match payments more reliably.

Control this with:

```env
USDT_USE_UNIQUE_AMOUNTS=true
USDT_UNIQUE_AMOUNT_MAX_CENTS=30
```

## Why Private Keys Are Not Needed

This phase only confirms incoming payments. It does not withdraw, transfer, sweep, or refund crypto. Because it only reads public blockchain data, private keys are not needed.

Never store private keys in `.env`, GitHub, Vercel, logs, or the frontend.

## Wrong Network Warning

USDT TRC20 must be sent on TRON.

USDT BEP20 must be sent on BNB Smart Chain.

Wrong-network payments may be lost or require manual recovery. The bot will not mark wrong-network payments as confirmed.

## Production TronGrid Safety

Recommended production TronGrid settings:

1. Keep `TRONGRID_API_KEY` backend-only.
2. Use a User-Agent allowlist with `SUBLY_BACKEND_USER_AGENT`.
3. Use the Contract Address Allowlist for the USDT TRC20 contract:
   `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`
4. Only add a Requested API Allowlist after confirming the exact endpoints used in production.
5. Do not enable JWT yet unless you later need that level of access control.
6. Never call TronGrid directly from the React frontend.

The same backend TRC20 and BEP20 verification services should be used by the Telegram Store Bot, web checkout, and web wallet deposit. Frontend screens should only create or check payment intents through the backend.

## Before Real Launch

Do not launch real payments with only in-memory storage.

Before production, move payment intents, payments, orders, wallet transactions, and audit logs into Supabase or PostgreSQL. Add unique constraints for transaction hashes and payment references so the same blockchain transaction cannot confirm multiple payments.
