# Checkout Redesign

## Route And File

Route: `/checkout`

Primary file: `src/CheckoutPage.jsx`

## Purpose

Checkout collects delivery information, explains payment methods, confirms consent, and creates the correct next step without confusing the customer.

## Required Content

1. Compact checkout header with secure checkout indicator.
2. Delivery email field.
3. Payment method selector for currently supported methods.
4. A short description that changes when a payment method is selected.
5. Bank transfer instructions and proof upload only when that method requires them.
6. USDT network, amount, address, expiry, and wrong network warning when applicable.
7. Subly Points login and balance requirement states.
8. Terms checkbox.
9. Order summary with products, quantities, subtotal, discount, savings, and total.
10. Primary action reflecting the selected payment method.
11. Loading, validation, unavailable method, and submission error states.

## Copy Ready Prompt

Redesign only `/checkout` in `src/CheckoutPage.jsx`. Preserve authentication gating, checkout items, quantities, promo code, totals, currency formatting, payment method selection, WhatsApp and Telegram message generation, bank proof behavior, USDT details, Subly Points requirements, consent validation, and success routing. Use a clean two column desktop checkout and a single column mobile layout. Make payment methods selectable tiles with visible icons and a concise contextual explanation below. Use dark text on light surfaces. Use blue for selected actions, teal for secure or verified information, and red for real errors and wrong network warnings. Do not show a failed payment preview link during normal checkout. Never let payment addresses, references, or totals overflow. Do not alter payment logic. Run build and lint.
