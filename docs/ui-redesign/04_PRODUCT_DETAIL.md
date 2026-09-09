# Product Detail Redesign

## Route And File

Route: `/product/:slug`

Primary file: `src/ProductDetailPage.jsx`

## Purpose

This page gives the customer enough product, access, pricing, and delivery information to make a confident purchase decision.

## Required Content

1. Breadcrumb or clear return to shop.
2. Product identity using the real app logo without a large decorative product image.
3. Product name, category, badge, status, validity, price, original price, and savings.
4. Quantity selector with minus, number input or stepper, and plus controls.
5. Clear description.
6. Features and what is included.
7. Required customer input explanation for assisted products.
8. Stock state for ready made products.
9. Delivery estimate and trust indicators.
10. Add to Cart and Buy Now actions.
11. Related products.
12. Sticky mobile purchase bar.

## Copy Ready Prompt

Redesign only `/product/:slug` in `src/ProductDetailPage.jsx`. Preserve slug lookup, product data, quantity calculations, currency conversion, cart action, Buy Now routing, stock checks, and related product links. Use a premium two column desktop layout with product identity and access summary on the left and purchase information on the right. Do not add a large decorative image; use the real product logo in a compact stable container. Make description, features, validity, delivery, stock, requirement, and included items easy to scan. Build an accessible quantity stepper and a sticky mobile action bar. Use dark text on light surfaces, blue for primary actions, teal for verified and available states, and red for out of stock. Do not touch checkout or backend logic. Run build and lint.
