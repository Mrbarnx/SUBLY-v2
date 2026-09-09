# Subly Backend Phase 1: Supabase Production Foundation

This phase adds the production foundation only. It does not connect the React frontend pages yet, does not remove localStorage prototype behavior, and does not replace the Telegram Store Bot mock flow yet.

## What Was Added

### Migrations

Run these in order:

1. `supabase/migrations/202607090001_core_schema.sql`
2. `supabase/migrations/202607090002_rls_policies.sql`
3. `supabase/storage/202607090003_storage_buckets.sql`

### Core Tables

The schema includes:

1. `profiles`
2. `telegram_users`
3. `product_categories`
4. `products`
5. `product_credentials`
6. `orders`
7. `order_items`
8. `order_status_events`
9. `wallets`
10. `wallet_transactions`
11. `payment_intents`
12. `payments`
13. `promo_codes`
14. `notifications`
15. `admin_audit_logs`

### Storage Buckets

The storage setup creates:

1. `product-images`
2. `profile-images`
3. `payment-proofs`
4. `support-attachments`

Product and profile images are public-read friendly. Payment proofs and support attachments stay private and should only be readable by the owner or admins.

## Security Model

### Frontend

The frontend must only use:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

The frontend must never use the service role key.

### Backend

The backend uses:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
```

`SUPABASE_SERVICE_ROLE_KEY` is backend-only and must never be logged, committed, sent to the browser, or exposed through Telegram messages.

## RLS Policy Summary

1. Public users can read active product categories and active non-draft products.
2. Users can read and update their own profile.
3. Users can read only their own orders, order items, order status events, wallet, wallet transactions, payment intents, payments, and notifications.
4. Product credentials are admin-only.
5. Admin audit logs are admin-only.
6. Admin actions depend on `profiles.role = 'admin'`.

## Product Credential Rule

`product_credentials` is sensitive. It must never be publicly readable.

Credentials should only be reserved, released, and delivered through backend service-role logic. When production fulfillment is added, credential reservation should become transactional so two buyers cannot receive the same account.

## Admin Role Plan

1. Create your account through Supabase Auth.
2. Find your user ID in Supabase Auth.
3. Insert or update your `profiles` row with `role = 'admin'`.
4. Keep all admin UI checks as convenience only.
5. Enforce real admin permission through backend services and RLS policies.
6. Write important admin changes to `admin_audit_logs`.

Example SQL after your profile exists:

```sql
update public.profiles
set role = 'admin'
where id = 'YOUR_AUTH_USER_ID';
```

## Backend Files Added

1. `src/lib/supabaseAdmin.js`
2. `src/services/supabase/admin.service.js`
3. `src/services/supabase/users.service.js`
4. `src/services/supabase/telegramUsers.service.js`
5. `src/services/supabase/products.service.js`
6. `src/services/supabase/inventory.service.js`
7. `src/services/supabase/orders.service.js`
8. `src/services/supabase/wallet.service.js`
9. `src/services/supabase/payments.service.js`
10. `src/services/supabase/index.js`

These files are skeletons for production connection. They intentionally live beside the current mock services so the Telegram Store Bot does not break.

## Environment Variables

Required for backend production:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
```

Keep existing bot and payment variables too:

```env
SUBLY_STORE_BOT_TOKEN=
TRONGRID_API_KEY=
USDT_TRC20_RECEIVE_ADDRESS=
BSC_RPC_URL=
USDT_BEP20_RECEIVE_ADDRESS=
```

## What Comes Next

Recommended next backend phases:

1. Apply migrations in Supabase.
2. Create admin user and set `profiles.role = 'admin'`.
3. Backend Phase 2: products and admin product management.
4. Backend Phase 3: inventory and live stock.
5. Backend Phase 4: orders, wallet, and payment intents.
6. Backend Phase 5: connect Telegram Store Bot to Supabase.
7. Backend Phase 6: connect Web App to Supabase.
8. Backend Phase 7: admin fulfillment and operations.
9. Backend Phase 8: Support Bot and ticket system.
10. Backend Phase 9: production hardening and deployment.

The full roadmap is documented in `SUPABASE_README.md` under `Full Backend Roadmap`.

## Backend Phase 2 Start

Phase 2 has started with the product database bridge.

Added:

1. `supabase/migrations/202607190004_phase2_product_admin_fields.sql`
2. `supabase/migrations/202607190005_phase2_api_grants.sql`
3. `scripts/seed-supabase-products.mjs`
4. `npm run supabase:seed-products`
5. Supabase product reads in `src/productData.js` with localStorage fallback.
6. Backend product/category/storage service skeletons.
7. Protected backend admin product routes under `/api/admin`.

Run the Phase 2 migrations in Supabase SQL Editor, then run:

```text
supabase/migrations/202607190004_phase2_product_admin_fields.sql
supabase/migrations/202607190005_phase2_api_grants.sql
```

Then run:

```bash
npm run supabase:seed-products
```

After that, the web catalog can read products from Supabase when the frontend Supabase env values are configured.

Admin routes require a valid Supabase bearer token. The backend verifies the token, derives the profile id from the authenticated user, and requires `profiles.role = 'admin'` before using service-role operations.

## Not Connected Yet

This phase does not yet:

1. Replace localStorage.
2. Connect frontend auth to Supabase Auth.
3. Connect shop/products to Supabase.
4. Deliver credentials.
5. Process real payments from Supabase.
6. Build Support Bot.
7. Build full admin backend routes.
