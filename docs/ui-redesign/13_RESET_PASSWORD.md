# Reset Password Redesign

## Route And File

Route: `/reset-password`

Primary file: `src/AuthScreens.jsx`

## Purpose

This screen accepts a valid Supabase recovery session and lets the customer set a new password.

## Required Content

1. Recovery session verification state.
2. New password and confirm password.
3. Password requirements.
4. Save New Password action.
5. Success state linking to Login.
6. Expired or invalid link recovery action.

## Copy Ready Prompt

Redesign only `/reset-password` in `src/AuthScreens.jsx`. Preserve Supabase recovery session detection, password validation, updatePassword call, expired link behavior, success state, and login routing. Use a focused form with two password fields, clear requirements, visible loading state, and concise red errors. Do not render an editable form until the recovery session is valid. After success, replace the form with a calm confirmation and Login action. Run build and lint.
