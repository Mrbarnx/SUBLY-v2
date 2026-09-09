# Wallet Redesign

## Route And File

Route: `/wallet`

Primary files: `src/WalletPage.jsx` and `src/AccountShell.jsx`

## Purpose

Wallet shows Subly balance or points, lets customers begin a funding request, and displays transaction history safely.

## Required Content

1. Current balance with clear currency or points unit.
2. Total deposited and pending amount where supported.
3. Add Funds action.
4. Funding methods currently supported by the system.
5. Minimum and maximum funding rules.
6. Bank transfer and USDT instructions with network safety warnings.
7. Payment request reference, amount, expiry, copy controls, Check Payment, and Cancel.
8. Transaction history with status.
9. Empty, pending, confirmed, expired, failed, and rate limited states.

## Copy Ready Prompt

Redesign only `/wallet` using `src/WalletPage.jsx` and `src/AccountShell.jsx`. Preserve authentication, points or balance calculations, currency conversion, minimum and maximum limits, funding request creation, payment references, bank and USDT instructions, status updates, and transaction history. Treat financial information as operational data, not decoration. Use a prominent balance area, compact funding method selector, clear amount input, and a readable transaction ledger. Wallet addresses and references must wrap safely and have copy controls. Show explicit TRC20 and BEP20 wrong network warnings. Never let frontend code credit balances directly. Do not change financial logic. Run build and lint.
