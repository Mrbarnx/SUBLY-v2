# OTP Verification Redesign

## Route And File

Route: `/verify-otp`

Primary file: `src/AuthScreens.jsx`

## Purpose

This is a compact verification interface for code based confirmation when that flow is active.

## Required Content

1. Six equal digit fields.
2. Automatic focus movement and backspace behavior.
3. Resend countdown.
4. Verify action.
5. Contact Support link.
6. Invalid, expired, and rate limited code states.

## Copy Ready Prompt

Redesign only `/verify-otp` in `src/AuthScreens.jsx`. Preserve the existing OTP inputs, focus behavior, countdown, redirect handling, and support destination. Create six stable square inputs that never resize, accept one digit each, and remain usable at 320px. Show a concise resend timer and disable resend until allowed. Add accessible labels and visible keyboard focus. Do not pretend OTP verification is active if the underlying Supabase flow still uses email links. Run build and lint.
