# Forgot Password Redesign

## Route And File

Route: `/forgot-password`

Primary file: `src/AuthScreens.jsx`

## Purpose

This screen sends a secure Supabase password recovery link without creating email abuse or confusing the customer.

## Required Content

1. Email field.
2. Send Reset Link action.
3. Back to Login link.
4. Success message that asks the user to check inbox and spam.
5. Cooldown countdown before another request.
6. Friendly rate limit, invalid email, and network states.

## Copy Ready Prompt

Redesign only `/forgot-password` in `src/AuthScreens.jsx`. Preserve the Supabase recovery call, reset redirect URL, cooldown timer, safe generic email response, and error mapping. Use a minimal premium form with one email field and one primary action. After submission, show a calm confirmation panel and prevent repeated email requests during the cooldown. Translate Supabase rate limits into: `Too many email requests. Please wait a few minutes before trying again.` Keep Back to Login as a normal text link with an arrow icon, not highlighted text. Run build and lint.
