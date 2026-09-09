# Profile Redesign

## Route And File

Route: `/profile`

Primary files: `src/ProfilePage.jsx` and `src/AccountShell.jsx`

## Purpose

Profile manages customer identity, contact details, avatar, and password related account actions.

## Required Content

1. Avatar using uploaded image, selected icon, or name initial fallback.
2. Image upload with crop, reposition, preview, remove, and validation states.
3. Full name, email, phone, and country.
4. Account verification indicators where real.
5. Save Changes action.
6. Change Password section or secure password reset path.
7. Success and failure feedback.

## Copy Ready Prompt

Redesign only `/profile` using `src/ProfilePage.jsx` and `src/AccountShell.jsx`. Preserve Supabase user identity, profile fields, avatar processing, icon choices, image validation, password actions, auth events, and save behavior. Use a social quality avatar editor with a circular preview, camera action, crop and position controls, and an initial fallback. Keep personal information and security as separate unframed sections. Email must not appear editable if the backend does not safely support changing it. Use concise red errors and teal success confirmation. Do not change auth or storage logic. Run build and lint.
