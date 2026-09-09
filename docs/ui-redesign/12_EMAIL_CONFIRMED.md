# Email Confirmed Redesign

## Route And File

Route: `/auth/confirmed`

Primary file: `src/AuthScreens.jsx`

## Purpose

This screen confirms the result of email verification and routes the customer safely to login or the intended destination.

## Required Content

1. Verified, pending, and invalid link states.
2. Clear confirmation mark for success.
3. Confirmed email where safe and useful.
4. Continue to Login action.
5. Return to Signup or resend guidance for invalid or expired links.

## Copy Ready Prompt

Redesign only `/auth/confirmed` in `src/AuthScreens.jsx`. Preserve Supabase callback session handling, URL parameters, pending confirmation state, stored pending email, safe redirect handling, and login routing. Create distinct verified, pending, expired, and invalid states. Use teal only for confirmed success, blue for the next action, and red only for invalid or expired links. Never show a success message before Supabase confirms the callback. Keep the page compact and responsive. Run build and lint.
