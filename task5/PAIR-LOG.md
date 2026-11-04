# Pair:
[Your name]

# Method:
[Partner's name]
[screen share / Live Share / one laptop]

## Who drove what

| Segment | Driver | Navigator | What we did |
|---|---|---|---|
| 1 (baseline) | [Name] | [Name] | Ran the baseline version and identified the extra render work. |
| 2 (fix 1) | [Name] | [Name] | Replaced derived filtered state with a memoized calculation. |
| 3 (measure) | [Name] | [Name] | Measured baseline and after Fix 1 in Chrome DevTools. |
| 4 (fix 2) | [Name] | [Name] | Added a stable selection callback for product rows. |
| 5 (measure) | [Name] | [Name] | Measured after Fix 2 using the same procedure. |
| 6 (fix 3) | [Name] | [Name] | Memoized ProductRow to skip unchanged row renders. |
| 7 (measure) | [Name] | [Name] | Measured after Fix 3 using the same procedure. |
| 8 (experiment) | [Name] | [Name] | Tested memoization without a stable function prop. |
| 9 (write-up) | [Name] | [Name] | Recorded the measurements and explained what each fix addressed. |

## How we measured

- 60 products
- StrictMode removed
- Typed one character, `a`, into an empty search box
- Ran `console.countReset('row renders')` first
- Read the last `row renders: N` line

## Measurements

| Version | Rows re-rendered |
|---|---|
| Baseline | |
| After Fix 1 | |
| After Fix 2 | |
| After Fix 3 | |

## What each fix addressed

- Fix 1 computes filtered products with `useMemo` instead of storing derived data in state and updating it from the filtering effect.
- Fix 2 keeps the row selection callback stable with `useCallback`.
- Fix 3 wraps `ProductRow` in `React.memo` so rows with unchanged props can skip re-rendering.

## Experiment: memo without a stable function

