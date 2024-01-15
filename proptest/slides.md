---
presentation:
  slideNumber: true
  theme: white.css
  transitionSpeed: "fast"
---

<!-- slide -->

# Property-Based Testing (proptest)

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
sort([]); // []

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
  - ✅ Easy to identify cases causing failures
  - ✅ Fast to run
- Cons
  - 🔴 Arbitrary examples
  - 🔴 Not representative of real-world usage
  - 🔴 Limited scope
  - 🔴 Static

---

<!-- slide -->

# What's a property?

<!-- slide -->

# What's a property?

- a characteristic of the **output**

<!-- slide -->

# What's a property?

- a characteristic of the **output**
  - `x` is an even number

<!-- slide -->

# What's a property?

- a characteristic of the **output**
  - `x` is an even number
  - `s` is a string with length > 0

<!-- slide -->

# What's a property?

- a characteristic of the **output**
  - `x` is an even number
  - `s` is a string with length > 0
- a relationship between the _input_ and the _output_

<!-- slide -->

# What's a property?

- a characteristic of the **output**
  - `x` is an even number
  - `s` is a string with length > 0
- a relationship between the _input_ and the _output_
  - given `input > 0`, then `output > 0`

<!-- slide -->

# What's a property?

- a characteristic of the **output**
  - `x` is an even number
  - `s` is a string with length > 0
- a relationship between the _input_ and the _output_
  - given `input > 0`, then `output > 0`
  - given input is a non-empty string, the output contains the input

<!-- slide -->

# Properties of the sort function

```ts {.line-numbers}
function sort(array: number[]): number[];
```

<br />

1. the _output_ is an array
2. the _output_ contains all values of the _input_
3. the values of the _output_ are sorted in ascending order

<!-- slide -->

# Property-Based Testing

1. _Randomly_ generate inputs
2. Call your function `func(input)`
3. Checks that a given property holds for the input/output

---

<!-- slide -->

# Let's write our first prop test

@import "fast-check.png"

<br />

---

<!-- slide -->

# Let's write our first prop test

```ts
fc.assert(
  fc.property(fc.array(), (input) => {
    const output = sort(input);
    return isSorted(output);
  })
);
```

---

<!-- slide -->

# Let's write our first prop test

```ts {highlight=3-4}
fc.assert(
  fc.property(fc.array(), (input) => {
    const output = sort(input);
    return isSorted(output);
  })
);
```

---

<!-- slide -->

# Let's write our first prop test

```ts {highlight=[2,5]}
fc.assert(
  fc.property(fc.array(), (input) => {
    const output = sort(input);
    return isSorted(output);
  })
);
```

---

<!-- slide -->

# Let's write our first prop test

```ts {highlight=[1,6]}
fc.assert(
  fc.property(fc.array(), (input) => {
    const output = sort(input);
    return isSorted(output);
  })
);
```

---

<!-- slide -->

# Demo

<!-- slide -->

# Common concerns

- Slower to run
- Reproducibility
- Complex inputs

<!-- slide -->

# Common concerns

- **Slower to run**
  - Defaults to _100_ cases
  - Configurable globally or per-test
- Reproducibility
- Complex inputs

<!-- slide -->

# Common concerns

- Slower to run
  - Defaults to _100_ cases
  - Configurable globally or per-test
- **Reproducibility**
  - Starts each session with a _seed_
  - Failures are reported along with the _seed_
- Complex inputs

<!-- slide -->

# Common concerns

- Slower to run
  - Defaults to _100_ cases
  - Configurable globally or per-test
- Reproducibility
  - Starts each session with a _seed_
  - Failures are reported along with the _seed_
- **Complex inputs**
  - Important feature of prop test frameworks: **Shrinking**

<!-- slide -->

# Questions?
