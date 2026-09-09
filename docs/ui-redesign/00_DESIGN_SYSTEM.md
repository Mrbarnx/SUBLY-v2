# Subly Shared Design System

## Brand Goal

Subly is a premium digital access platform. It should feel trustworthy, modern, efficient, and clearly branded. It must not resemble a cheap reseller page, generic AI dashboard, or decorative landing page with no product purpose.

## Color Tokens

1. Primary Blue: `#2563EB`.
2. Action Blue: `#3B82F6`.
3. Electric Blue: `#60A5FA`.
4. Deep Navy: `#0F172A`.
5. Dark Surface: `#111827`.
6. Teal Accent: `#2DD4BF`.
7. Soft Teal: `#5EEAD4`.
8. White: `#FFFFFF`.
9. Light Background: `#F8FAFC`.
10. Light Border: `#E5E7EB`.
11. Error: use a restrained accessible red only for failures, destructive actions, and out of stock states.
12. Warning: use amber only when meaningfully required. Do not use yellow as decoration.

## Gradient Tokens

1. Hero: `#0F172A` to `#2563EB` to `#3B82F6`.
2. Brand: `#2563EB` to `#3B82F6` to `#2DD4BF`.
3. Glow: `#60A5FA` to `#2563EB` to `#2DD4BF`.

## Typography

1. Use the current project font unless explicitly replaced across the whole design system.
2. Use Deep Navy text on light surfaces.
3. Use white text only on genuinely dark surfaces.
4. Headings should be bold, compact, and readable rather than oversized.
5. Body copy should use comfortable line height and a maximum readable width.
6. Letter spacing must remain zero.
7. Never scale font size directly with viewport width.

## Layout

1. Use a centered desktop container around 1200px to 1280px.
2. Use consistent page gutters: 16px mobile, 24px tablet, and 32px desktop.
3. Use an 8px spacing rhythm.
4. Cards should normally use 8px radius or less unless an existing Subly component intentionally uses a larger surface.
5. Do not place cards inside cards.
6. Full page sections should remain unframed. Use cards for actual items, summaries, forms, and tools.
7. Avoid large empty areas, floating decorative panels, gradient orbs, and generic glass blocks.

## Components

1. Use Subly brand assets through `SublyLogo`.
2. Use `AppLogo` for product identities and real product logo assets where available.
3. Use icons for familiar actions such as search, cart, menu, close, upload, delete, copy, and navigation.
4. Every unfamiliar icon button needs an accessible label and tooltip.
5. Buttons need default, hover, active, focus, disabled, and loading states.
6. Inputs need label, placeholder, focus, error, disabled, and success states.
7. Use teal sparingly for verified, secure, completed, and available states.
8. Use blue for primary navigation and calls to action.

## Motion

1. Use opacity and transform only for most motion.
2. Entry motion should last roughly 0.55 to 0.75 seconds.
3. Use easing similar to `[0.22, 1, 0.36, 1]`.
4. Do not bounce, spin, or aggressively slide content.
5. Respect reduced motion preferences.

## Responsive Rules

1. Verify 320px, 360px, 390px, 430px, 768px, 1024px, and 1280px.
2. No horizontal overflow.
3. No cut buttons or inputs.
4. Long product names, references, emails, wallet addresses, and order IDs must wrap safely.
5. Desktop sidebars should become a polished mobile sheet or compact top navigation.
6. Tables must become stacked rows, scroll containers, or labeled mobile records.

## Functional Protection

1. Do not alter routes.
2. Do not replace Supabase calls with local mock data.
3. Do not expose service role keys or backend secrets.
4. Do not change auth redirects or protected route behavior.
5. Do not change product, cart, promo, currency, payment, wallet, order, or admin calculations.
6. Preserve loading, empty, success, warning, and error states.
7. Preserve semantic HTML, keyboard navigation, labels, focus visibility, and screen reader text.

## Shared Copy Ready Instruction

Redesign only the requested Subly screen. Read `RULES.md` and `docs/ui-redesign/00_DESIGN_SYSTEM.md` first. Preserve all existing routes, data flow, Supabase integration, authentication, validation, calculations, and business logic. Use the Subly blue, navy, teal, white, and light background system. Make the screen premium, responsive, accessible, and operational. Do not rebuild unrelated pages. Run build and lint after editing.
