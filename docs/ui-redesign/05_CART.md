# Cart Redesign

## Route And File

Route: `/cart`

Primary file: `src/CartPage.jsx`

## Purpose

The cart lets customers review selected products, change quantities, remove items, apply a promo code, understand savings, and proceed to checkout.

## Required Content

1. Shared navigation and clear Cart heading.
2. Item list with logo, product name, validity, delivery type, quantity controls, price, and remove action.
3. Empty cart state with Browse Products action.
4. Promo code input with no visible example codes.
5. Promo success, invalid, expired, and minimum subtotal states.
6. Order summary with subtotal, discount, savings, and total.
7. Continue Shopping and Proceed to Checkout actions.
8. Mobile sticky checkout summary where useful.

## Copy Ready Prompt

Redesign only `/cart` in `src/CartPage.jsx`. Preserve local guest cart behavior, product lookup, quantity changes, remove behavior, promo normalization, totals, currency formatting, checkout query construction, and empty state. Create a premium practical cart with an item list and a clearly separated order summary. Use icon controls for remove and quantity actions where text does not fit. Do not display sample promo codes. Provide compact inline success and red error messages with one short solution. Keep buttons fully visible at 320px and prevent long product names from breaking rows. Use Subly design tokens and do not change checkout logic. Run build and lint.
