# Referrals Redesign

## Route And File

Route: `/referrals`

Primary files: `src/ReferralsPage.jsx` and `src/AccountShell.jsx`

## Purpose

Referrals lets customers understand the reward program, copy their invitation link, and view referral progress.

## Required Content

1. Referral summary and current reward rule.
2. Copyable invitation link.
3. Share actions.
4. Stats for signups, qualified referrals, pending verification, rewarded referrals, and total earned.
5. Three step How It Works explanation.
6. Referral history.
7. Clear anti abuse rules.
8. Support path for disputed referral status.

## Copy Ready Prompt

Redesign only `/referrals` using `src/ReferralsPage.jsx` and `src/AccountShell.jsx`. Preserve referral link generation, copy behavior, current values, navigation, and future Supabase compatibility. Create a premium referral center with one clear invitation link, compact stats, a three step explanation, referral history, and readable anti abuse rules. Do not promise earnings that the current backend cannot verify. Use blue for sharing actions, teal for qualified states, muted text for pending states, and red only for rejected or abusive states. Run build and lint.
