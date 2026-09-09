# Signup Redesign

## Route And File

Route: `/signup`

Primary file: `src/AuthScreens.jsx`

## Purpose

Signup creates a Supabase Auth account while collecting the profile details required by Subly.

## Required Content

1. Subly logo and a return to store path.
2. Full name and email.
3. Country selector and phone number.
4. Password and confirm password.
5. Terms and Privacy Policy consent with links aligned beside the checkbox.
6. Turnstile when configured.
7. Create Account action.
8. Existing account login link.
9. Duplicate email, validation, rate limit, network, and confirmation pending messages.

## Copy Ready Prompt

Redesign only `/signup` in `src/AuthScreens.jsx`. Preserve Supabase signup, metadata, country and phone validation, disposable email protection, password validation, duplicate email handling, Terms and Privacy consent, Turnstile, redirect query handling, email confirmation routing, cooldowns, and error mapping. Use a focused premium authentication layout with one clear form surface, compact headings, dark text, visible labels, balanced fields, and a properly aligned consent checkbox. Error messages must be red, short, and include one practical solution. Do not expose whether arbitrary emails exist beyond the behavior safely supported by Supabase. Make the form excellent at 320px and desktop. Run build and lint.
