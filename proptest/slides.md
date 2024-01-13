---
presentation:
    slideNumber: true
    theme: white.css
---

<!-- slide -->

# Property-Based Testing

<!-- slide -->
# Example - Sorting an array

```ts {.line-numbers}
function sort(array: number[]): number[];
```

How would you unit test this function❓

---

<!-- slide -->
# Example-Based Testing

```ts {.line-numbers}
sort([]);        // []

sort([1, 1, 1]); // [1, 1, 1]

sort([1, 2, 3]); // [1, 2, 3]
sort([3, 2, 1]); // [1, 2, 3]
sort([2, 1, 3]); // [1, 2, 3]
```

---

<!-- slide -->
# Example-Based Testing

- Pros
  - ✅ Simple to write & read
  - ✅ Easy to identify which input causes a failure
  - ✅ Fast to run
- Cons
  - 🔴 Arbitrary examples
  - 🔴 Not representative of real-world usage
  - 🔴 Limited scope
  - 🔴 Static 

---

<!-- slide -->
# What's a property?

- a characteristic of the **output**
  - `x` is an even number
  - `s` is a string with length > 0
- a relationship between the *input* and the *output*
  - given `input > 0` then `output > 0` 


<!-- slide -->
# What's a property?

```math
forall\ (x, y, ...)\newline 
property(x, y, ...)\ is\ \textcolor{green}{true}
```

---

<!-- slide -->
# Properties of the sort function

```ts {.line-numbers}
function sort(array: number[]): number[];
```

<br />

1. the *output* is an array
2. the *output* contains all values of the *input*
3. the values of the *output* are in ascending order

---

<!-- slide -->
# Demo

---