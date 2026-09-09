# Login Redesign

## Route And File

Route: `/login`

Primary file: `src/AuthScreens.jsx`

## Purpose

Login securely restores a Supabase session and returns the customer to the protected page they originally requested.

## Required Content

1. Subly logo.
2. Email and password fields.
3. Forgot Password link.
4. Turnstile when configured.
5. Login action with loading state.
6. Signup link.
7. Invalid credentials, unconfirmed email, rate limit, and network error messages.
8. Safe redirect handling.

## Copy Ready Prompt

Redesign only `/login` in `src/AuthScreens.jsx`. Preserve Supabase sign in, Turnstile, session persistence, safe redirect query handling, protected route return, error mapping, and auth update events. Use a compact premium login form with clear labels, password visibility support if added safely, and no highlighted text backgrounds behind ordinary links. Keep Forgot Password easy to find without competing with the primary Login action. Show red concise errors with a short solution and disable repeated submissions while loading. Do not change authentication logic. Run build and lint.
