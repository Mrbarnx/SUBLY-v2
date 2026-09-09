# Order Failed Redesign

## Route And File

Route: `/order/failed`

Primary file: `src/OrderResultPage.jsx`

## Purpose

This page explains that payment or order submission failed, preserves the customer’s context, and provides a safe recovery path.

## Required Content

1. Restrained error icon.
2. Clear failure title and short reason.
3. Order or attempted item summary where available.
4. No suggestion that money was received.
5. Retry Payment action.
6. Return to Cart action.
7. Contact Support action.
8. A short safety note against paying twice before checking status.

## Copy Ready Prompt

Redesign only the failure state at `/order/failed` in `src/OrderResultPage.jsx`. Preserve the current order items, promo context, retry routing, cart routing, and support destination. Use an accessible red failure state without making the whole page red. Explain the failure briefly and provide one practical solution. Keep Retry Payment primary, Return to Cart secondary, and Contact Support available. Warn the customer not to pay twice if a transfer may already be processing. Do not mark an order failed based only on a frontend assumption and do not modify payment logic. Run build and lint.
