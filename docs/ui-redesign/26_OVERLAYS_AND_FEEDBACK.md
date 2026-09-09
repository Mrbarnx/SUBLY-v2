# Shared Overlays And Feedback Redesign

## Scope

This document covers shared UI that appears above pages or inside navigation rather than having its own route.

## Components And States

1. Homepage mobile navigation.
2. Shop mobile navigation sheet.
3. Account mobile navigation sheet.
4. Shop account dropdown.
5. Country selector dropdown.
6. Currency selector.
7. Toast success and error messages.
8. Admin confirmation dialogs.
9. Product image upload and crop interface.
10. Payment proof upload interface.
11. Optional Lead Capture modal. It must remain disabled by default unless intentionally launched.
12. Loading overlays and skeletons.

## Interaction Rules

1. Sheets and dialogs need backdrop, close icon, Escape behavior, focus management, and body scroll control.
2. Menus must close after navigation and when clicking outside.
3. Toasts should appear in a consistent corner, remain readable on mobile, and never hide primary controls.
4. Success messages should state what changed.
5. Error messages should be red, brief, specific, and include one short solution.
6. Destructive confirmations must name the exact product, order, promo, image, or transaction affected.
7. Upload errors must explain file type, size, or processing failure accurately.

## Copy Ready Prompt

Redesign the shared Subly overlays and feedback components only. Preserve every existing handler, route, auth event, menu destination, upload process, and notification event. Create consistent mobile sheets, account menus, country and currency dropdowns, toasts, confirmation dialogs, upload interfaces, loading states, and error states using the Subly design system. Use icon buttons for close and familiar actions, visible focus states, Escape and outside click behavior, focus trapping for modal dialogs, and mobile safe sizing. Keep the optional Lead Capture modal disabled by default. Error messages must use a restrained red style and one short recovery instruction. Do not change business logic or automatically mount new popups. Run build and lint.
