# Admin Dashboard Redesign

## Route And File

Route: `/admin`

Primary files: `src/AdminDashboard.jsx`, `src/adminApi.js`, and `src/AccountShell.jsx` where shared patterns apply.

## Purpose

The admin dashboard is the owner’s operational workspace for products, product images, visibility, promo codes, orders, stock, wallet funding, and future fulfillment.

## Required Content

1. Supabase session based admin verification screen.
2. Desktop collapsible sidebar and mobile sheet.
3. Overview metrics.
4. Product list with search, category, stock, status, and visibility.
5. Product editor with structured fields.
6. Product image upload, preview, fit, position, replace, and remove controls.
7. Promo code management.
8. Recent order operations.
9. Wallet or points funding review.
10. Confirmation dialog for destructive or high impact changes.
11. Success and real failure toasts.
12. Audit friendly action labels.

## Security Requirements

The browser must send the signed in Supabase access token. The backend must derive the user ID and check `profiles.role = 'admin'`. Never restore browser stored `ADMIN_API_SECRET`, static owner passcodes, manually entered profile IDs, or service role keys.

## Copy Ready Prompt

Redesign only `/admin` in `src/AdminDashboard.jsx`. Preserve the current Supabase bearer session authentication, server side admin role verification, protected backend routes, product mapping, product image upload, local fallback behavior that is still intentionally present, product and promo forms, order status functions, wallet review functions, notifications, and audit logging. Build a quiet dense operational interface with a collapsible sidebar, useful overview, searchable product table, structured editor, reliable image controls, and responsive mobile records. Add confirmation dialogs for archive, status, delivery, wallet credit, and other high impact actions. Never expose backend secrets or replace the current admin authorization with a frontend passcode. Use dark text on light surfaces, blue for primary actions, teal for verified success, and red for failures or destructive actions. Run build and lint.
