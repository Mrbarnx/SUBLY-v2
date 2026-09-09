# Shop Redesign

## Route And File

Route: `/shop`

Primary file: `src/ShopPage.jsx`

## Purpose

The shop is the main product discovery surface. It must help users search, filter, compare, paginate, add products to cart, and open product details quickly.

## Required Content

1. Subly navigation with cart, wallet where appropriate, currency selector, and account menu.
2. A restrained shop banner with the title `Shop`, useful product imagery or product identity, and no marketing tagline overload.
3. Search bar with clear action and reset state.
4. Category navigation with counts.
5. Product catalog grid with consistent image regions and information outside the image container.
6. Real product logos through `AppLogo`.
7. Product name, category, rating, price, original price where relevant, delivery estimate, stock state, Add to Cart, and Buy Now.
8. Pagination that supports the full product list as products grow.
9. Recommendation carousel showing four cards desktop and two mobile with previous and next controls.
10. Newsletter and footer.

## Product Card Rules

Images must use a stable aspect ratio and `object-contain` for logos. Do not use glow ovals behind logos. Text and buttons must not share one giant capsule with the image. Buy Now opens product detail according to the existing flow. Out of stock products must be clearly unavailable.

## Copy Ready Prompt

Redesign only the Subly shop at `/shop` in `src/ShopPage.jsx`. Preserve Supabase product reads, search, filters, category counts, pagination, currency conversion, cart behavior, product detail links, authentication behavior, and mobile menu functionality. Use a clean premium commerce layout with a restrained Shop banner, practical sidebar on desktop, responsive filters on mobile, and a stable product grid. Keep product images in identical aspect ratio containers and show real logos with `AppLogo` using `object-contain`. Place product information below the image rather than trapping everything inside one card visual. Use Subly blue for actions, deep navy for text, teal only for availability or trust, and red only for out of stock or errors. Remove yellow decorative icons and logo glow ovals. Make recommendations four across on desktop and two across on mobile with working previous and next controls. Do not modify product data or business logic. Run build and lint.
