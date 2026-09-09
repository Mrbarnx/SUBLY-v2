# Orders Redesign

## Route And File

Route: `/orders`

Primary files: `src/OrdersPage.jsx` and `src/AccountShell.jsx`

## Purpose

Orders gives customers a complete, understandable history of purchases and their fulfillment status.

## Required Content

1. Orders heading and status filter.
2. Search by order reference where practical.
3. Order reference, date, product names, total, payment method, and status.
4. Clear status colors for pending, review, processing, delivered, refunded, and cancelled.
5. View Details or support action.
6. Pagination when the list grows.
7. Empty state with Browse Products action.
8. Mobile records that do not depend on a wide table.

## Copy Ready Prompt

Redesign only `/orders` in `src/OrdersPage.jsx` and reuse `src/AccountShell.jsx`. Preserve authentication, order retrieval, filters, status values, currency formatting, links, and future Supabase compatibility. Use a compact desktop list or table with labeled columns and transform it into clearly labeled stacked records on mobile. Long order references and product names must wrap or truncate safely with a copy action. Provide a meaningful empty state and concise red load errors with a retry action. Do not alter order status logic. Run build and lint.
