# Customer Dashboard Redesign

## Route And File

Route: `/dashboard`

Primary files: `src/DashboardPage.jsx` and `src/AccountShell.jsx`

## Purpose

The dashboard is the signed in customer’s overview. It summarizes activity and provides fast access to products, orders, wallet, profile, settings, and referrals.

## Required Content

1. Desktop account sidebar and polished mobile navigation sheet.
2. Personalized greeting.
3. Summary values for orders, savings, wallet or points, and delivery state.
4. Recent Orders showing only a short list.
5. View All Orders action.
6. Recommended or newly available products.
7. Browse Products action.
8. Empty customer state when no orders exist.
9. Loading and error states ready for Supabase data.

## Copy Ready Prompt

Redesign only `/dashboard` using `src/DashboardPage.jsx` and the shared `src/AccountShell.jsx`. Preserve authentication gating, account navigation, existing order and product sources, currency formatting, status labels, and destination routes. Create a quiet operational dashboard rather than a marketing page. Use compact summary panels, a recent orders list limited to a few records, and a useful product discovery section for customers with no orders. The desktop sidebar must collapse cleanly and the mobile menu must open from a premium right aligned icon without overflow. Use dark text on light surfaces and blue actions. Do not change account business logic. Run build and lint.
