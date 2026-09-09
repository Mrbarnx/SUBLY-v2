# Homepage Redesign

## Route And File

Route: `/`

Primary file: `src/HeroSection.jsx`

## Purpose

The homepage introduces Subly, explains the value, shows trusted product categories and popular tools, communicates purchase confidence, and moves visitors toward the shop.

## Required Content

1. Compact navigation with Subly logo, core links, search, login, and signup.
2. Dark hero with a two column desktop layout.
3. Left side badge, two line headline, supporting copy, Explore Tools button, and How It Works button.
4. Compact trust row for delivery, secure payments, protection, and support.
5. Right side CSS and HTML Subly service visual. No WebGL and no empty glass rectangle.
6. Stats strip overlapping the hero bottom cleanly.
7. Browse Categories using seven consistent category cards.
8. Popular Tools powered by the existing product data.
9. Why Choose Subly section.
10. Community testimonials.
11. Newsletter signup surface.
12. Complete footer with real social icons.

## Responsive Direction

On mobile, use a right aligned premium menu button and a controlled menu sheet. Keep the hero copy readable, hide heavy desktop illustration details, use two column card grids where suitable, and avoid any horizontal line or pseudo element that follows the user while scrolling.

## Copy Ready Prompt

Redesign only the Subly homepage at `/` in `src/HeroSection.jsx`. Keep every existing link, product source, category, account behavior, newsletter field, and footer destination working. Use a compact premium dark hero with left aligned copy and a purposeful CSS and HTML visual on the right that shows Subly connecting customers to digital products. Do not use Three.js, an empty glass panel, floating random cards, or oversized decorative effects. Preserve the stats strip, Browse Categories, Popular Tools, Why Choose Subly, testimonials, newsletter, and footer. Apply the Subly tokens from `docs/ui-redesign/00_DESIGN_SYSTEM.md`. Make mobile navigation polished and ensure there is no horizontal overflow or scrolling line artifact. Do not touch other routes or backend logic. Run build and lint.
