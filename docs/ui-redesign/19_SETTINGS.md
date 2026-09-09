# Settings Redesign

## Route And File

Route: `/settings`

Primary files: `src/SettingsPage.jsx` and `src/AccountShell.jsx`

## Purpose

Settings manages customer preferences rather than personal identity.

## Required Content

1. Currency preference.
2. Email update toggle.
3. WhatsApp alert toggle.
4. Restock alert toggle.
5. Appearance or accessibility settings only when functional.
6. Privacy and legal links.
7. Save Changes action.
8. Logout and account danger actions clearly separated.

## Copy Ready Prompt

Redesign only `/settings` using `src/SettingsPage.jsx` and `src/AccountShell.jsx`. Preserve current preference storage, currency behavior, notification toggles, logout, and legal routes. Organize controls into clear sections with real toggles for binary preferences and menus for option sets. Keep destructive or session ending actions in a separate restrained danger section. Do not duplicate profile fields. Use dark text, Subly blue controls, and teal only for enabled or saved states. Run build and lint.
