# Subly UI Redesign Prompt Pack

This folder is the source of truth for redesigning every current Subly web screen without changing business logic.

## How To Use

1. Read `00_DESIGN_SYSTEM.md` first.
2. Open the Markdown file for the page you want to redesign.
3. Copy the text under `Copy Ready Prompt` into a new AI request.
4. Attach a reference image when one exists.
5. Work on one page at a time.
6. Test desktop and mobile before starting the next page.

## Recommended Build Order

1. Shared design system and overlays.
2. Homepage.
3. Shop.
4. Product detail.
5. Cart.
6. Checkout.
7. Authentication screens.
8. Account dashboard and account pages.
9. Admin dashboard.
10. Legal pages.

## Screen Index

1. `01_HOMEPAGE.md` for `/`.
2. `02_HOW_IT_WORKS.md` for `/how-it-works`.
3. `03_SHOP.md` for `/shop`.
4. `04_PRODUCT_DETAIL.md` for `/product/:slug`.
5. `05_CART.md` for `/cart`.
6. `06_CHECKOUT.md` for `/checkout`.
7. `07_ORDER_SUCCESS.md` for `/order/success`.
8. `08_ORDER_FAILED.md` for `/order/failed`.
9. `09_SIGNUP.md` for `/signup`.
10. `10_LOGIN.md` for `/login`.
11. `11_FORGOT_PASSWORD.md` for `/forgot-password`.
12. `12_EMAIL_CONFIRMED.md` for `/auth/confirmed`.
13. `13_RESET_PASSWORD.md` for `/reset-password`.
14. `14_OTP_VERIFICATION.md` for `/verify-otp`.
15. `15_ONBOARDING.md` for `/onboarding`.
16. `16_DASHBOARD.md` for `/dashboard`.
17. `17_ORDERS.md` for `/orders`.
18. `18_PROFILE.md` for `/profile`.
19. `19_SETTINGS.md` for `/settings`.
20. `20_WALLET.md` for `/wallet`.
21. `21_REFERRALS.md` for `/referrals`.
22. `22_ADMIN.md` for `/admin`.
23. `23_PRIVACY_POLICY.md` for `/privacy-policy`.
24. `24_TERMS.md` for `/terms-of-service`.
25. `25_DATA_DELETION.md` for `/data-deletion`.
26. `26_OVERLAYS_AND_FEEDBACK.md` for menus, sheets, toasts, upload dialogs, and optional lead capture.

## Non Negotiable Rule

Redesign means presentation only unless a prompt explicitly requests functionality. Never replace Supabase logic, auth guards, product loading, cart calculations, payment checks, wallet logic, Telegram logic, admin authorization, or existing routes while redesigning a screen.
