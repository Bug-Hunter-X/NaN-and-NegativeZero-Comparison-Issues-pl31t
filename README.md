# JavaScript Loose Comparison Bug: NaN and -0

This repository demonstrates a common pitfall in JavaScript's loose comparison (`==`) operator.  Specifically, the unexpected behavior when comparing `NaN` to itself and `0` to `-0`.

**Problem:**

JavaScript's `NaN` value (Not a Number) is never equal to itself, even using loose comparison.  Similarly, while mathematically equivalent, `0` and `-0` are considered distinct when compared using `==`.

**Solution:**

For reliable comparisons, use strict equality (`===`) instead of loose equality (`==`).  Strict equality avoids type coercion, leading to predictable results.

**Files:**

- `bug.js`: Shows the incorrect results using loose comparison.
- `bugSolution.js`: Demonstrates the correct use of strict comparison.