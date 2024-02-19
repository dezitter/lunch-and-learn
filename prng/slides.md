---
presentation:
  slideNumber: true
  theme: white.css
---

<!-- slide -->

# random

<!-- slide -->

# What is randomness?

<!-- slide -->

A _sequence_ of numbers is random when:

- there is no **pattern**
- the next outcome is not **predictable**

<!-- slide -->

# Example: six-sided dice

<!-- slide -->

@import "./images/dice-throws-pattern.png" {height="64px"}

<!-- slide -->

@import "./images/dice-throws.png" {height="64px"}

- no visible pattern
- every side is equally likely

> Innocent until proven guilty

<!-- slide -->

Randomness is used in many different fields:

- Simulations
- Research
- Surveys
- Gaming
- Cryptography
- ...

<!-- slide -->

# Computers and randomness

<!-- slide -->

Computers are **deterministic** machines.

Given some _inputs_, the **same** _outputs_ will be produced every single time.

<!-- slide -->

How can a computer produce randomness?

<!-- slide -->

How can a computer produce randomness?

➡️ PRNGs

<!-- slide -->

# What's a PRNG?

<!-- slide -->

A Pseudorandom number generator (PRNG) is a _deterministic_ algorithm which produces a sequence of numbers that _appear_ random.

<!-- slide -->

# Building our own PRNG

<!-- slide -->

**Linear Congruential Generator**

```math
X_{n+1} = (a * X_n + c) \mod m
```

- $a$ the multiplier
- $c$ the increment
- $m$ the modulus

<!-- slide -->

Using following parameters:

- $X_{0} = 0$
- $a = 7$
- $c = 3$
- $m = 2^{4}$

<!-- slide -->

```math
\begin{split}
  X_1 &=(7 * 0 + 3) \mod 2^{4}\\
  &=\textcolor{#228B22}{3}
\end{split}

\newline
\newline

\begin{split}
  X_2 &=(7 * 3 + \textcolor{#228B22}{3}) \mod 2^{4}\\
  &=\textcolor{#6534AA}{24}
\end{split}

\newline
\newline

\begin{split}
  X_3 &=(7 * 3 + \textcolor{#6534AA}{24}) \mod 2^{4}\\
  &=11
\end{split}
```

---

<!-- slide -->

```mermaid
flowchart LR
    X0 --> 0;
    0 --> 3 --> 24 --> 11;
    11 --> 16 --> 19 --> 8 --> 27;
    27 --> 0;
    style X0 fill:#bbf,stroke:#5454f7;
    classDef default padding:10px,stroke-width:2px;
```

---

<!-- slide -->

Important properties of a PRNG:

- the starting point is called the **seed**
- the sequence will eventually repeat, the length of the sequence is called the **period**
- knowing the seed, you can predict _the entire sequence_

<!-- slide -->

# Visualizing Math.random()

@import "./demo/builtin.1d.iframe.html" {}

<!-- slide -->

# Visualizing Math.random()

@import "./demo/builtin.2d.iframe.html" {}

<!-- slide -->

# Visualizing our PRNG

@import "./demo/custom.1d.iframe.html" {}

<!-- slide -->

# Visualizing our PRNG

@import "./demo/custom.2d.iframe.html" {}

<!-- slide -->

# PRNG in the wild

| Language             | PRNG                    | Period                               |
| -------------------- | ----------------------- | ------------------------------------ |
| Java (< JDK 17 2021) | LCG                     | $2^{48}$ ($~ 10^{14}$)               |
| Java (>= JDK 17)     | Various implementations |                                      |
| JavaScript (v8)      | xorshift128+            | $2^{128}$ ($~ 10^{38}$)              |
| Python               | Mersenne Twister        | $$2^{19937} -1$$ ($4.3 * 10^{6001}$) |
| Ruby                 | Mersenne Twister        | $$2^{19937} -1$$ ($4.3 * 10^{6001}$) |
| Microsoft Excel      | Mersenne Twister        | $$2^{19937} -1$$ ($4.3 * 10^{6001}$) |

For comparison:

- one trillion seconds ($10^{12}$ seconds) is about 32000 years
- the sun weights about $2 * 10^{30}$ kg
- there are around $10^{80}$ atoms in the observable universe

<!-- slide -->

# True random generator

<!-- slide  -->

# HotBits

TODO https://www.fourmilab.ch/hotbits/hardware3.html#source

<!-- slide -->

# UChile

TODO https://random.uchile.cl/randomness-beacon

<!-- slide -->

# CloudFlare

@import "./images/lava-lamps.jpg"