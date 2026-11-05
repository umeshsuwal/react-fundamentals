# Pair:
Umesh Suwal and Lukash Napit

# Method:
Screen Sharing Method

## Who drove what

| Segment | Driver | Navigator | What we did |
|---|---|---|---|
| 1 (baseline) | Umesh Suwal | Lukash Napit | Ran the baseline version and identified the extra render work. |
| 2 (fix 1) | Lukash Napit | Umesh Suwal | Replaced derived filtered state with a memoized calculation. |
| 3 (measure) | Umesh Suwal | Lukash Napit | Measured baseline and after Fix 1 in Chrome DevTools. |
| 4 (fix 2) | Lukash Napit | Umesh Suwal | Added a stable selection callback for product rows. |
| 5 (measure) | Umesh Suwal | Lukash Napit | Measured after Fix 2 using the same procedure. |
| 6 (fix 3) | Lukash Napit | Umesh Suwal | Memoized ProductRow to skip unchanged row renders. |
| 7 (measure) | Umesh Suwal | Lukash Napit | Measured after Fix 3 using the same procedure. |
| 8 (experiment) | Lukash Napit | Umesh Suwal | Tested memoization without a stable function prop. |
| 9 (write-up) | Umesh Suwal | Lukash Napit | Recorded the measurements and attached screenshots for all four versions. |

## How we measured

- 60 products
- StrictMode removed
- Typed one character, `a`, into an empty search box
- Ran `console.countReset('row renders')` first
- Read the last `row renders: N` line

## Measurements

| Version | Rows re-rendered |
|---|---|
| Baseline | 102 |
| After Fix 1 | 42 |
| After Fix 2 | 42 |
| After Fix 3 | 5 |

## Screenshot evidence

- Baseline: [v0.png](./public/v0.png)
- After Fix 1: [v1.png](./public/v1.png)
- After Fix 2: [v2.png](./public/v2.png)
- After Fix 3: [v3.png](./public/v3.png)

## What each fix addressed

- Fix 1 computes filtered products with `useMemo` instead of storing derived data in state and updating it from the filtering effect.
- Fix 2 keeps the row selection callback stable with `useCallback`.
- Fix 3 wraps `ProductRow` in `React.memo` so rows with unchanged props can skip re-rendering.

## Experiment: memo without a stable function
