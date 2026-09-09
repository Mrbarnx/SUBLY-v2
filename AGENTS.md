# AGENTS.md

# Subly V2

Subly is a premium digital-access marketplace.

The current stage is frontend-only.

## Core rules

- Do not invent a new design direction.
- UI reference screenshots are the visual source of truth.
- Matching `.md` files describe each screen.
- Keep implementations responsive.
- Do not hardcode backend behavior.
- Do not add Supabase yet.
- Do not add payments yet.
- Do not add Telegram code yet.
- Do not add backend code yet.
- Use mock services/data for frontend development.
- Keep business/data access separate from page components.
- Reuse components instead of duplicating them.
- Do not create giant global CSS files.
- Prefer Tailwind utilities and small scoped styles where necessary.
- Do not install a UI framework without approval.
- Do not modify screens outside the active batch.
- Do not stage, commit, or push unless explicitly instructed.

## Responsive targets

Every screen must work at:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px

## Quality

- Semantic HTML
- Keyboard accessibility
- Visible focus states
- No horizontal overflow
- Proper loading states
- Proper empty states
- Proper error states
- Reusable components
- Clean TypeScript