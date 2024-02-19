# NOTES

#### Choosing good LCG parameters

A big cycle does not guarantee randomness but is important
We want to maximize the period length which is at most `m`.

- `m` shall be large (determines the _maximum_ period)
- `m` shall favour speed of generation
- `m` is typically the word size of the computer such as `2^32`

- `a=1` is bad becauses it doesnt yield a random sequence
- Maximum period is achieved when `b = a-1` is a multiple of
each prime dividing `m`

##  Statistical tests

Statistics provides us with quantitative measures of randomness

If a sequence T1, T2, ..., Tn is random, we cannot be sure
it will not fail at Tn+1

=> Innocent until proven guilty

- Chi-square tests
=> 

# BUFFER

## TOC

- how do you evaluate the quality of a PRNG?


        const createLCG = () => {
            let state = 1; // seed
            const mod = Math.pow(2, 32)
            const factor = 1664525
            const offset = 1013904223

            return function lcg () {
                state = (factor * state + offset) % mod;
                return state / mod;
            };
        }

        const random = createLCG();


Implementations

https://developer.classpath.org/doc/java/util/Random-source.html
https://github.com/python/cpython/blob/main/Lib/random.py
https://source.chromium.org/chromium/chromium/src/+/main:v8/src/base/utils/random-number-generator.h;l=119?q=XorShift128&ss=chromium
https://ruby-doc.org/core-2.4.0/Random.html

https://www.javamex.com/tutorials/random_numbers/lcg_planes.shtml
https://www.javamex.com/tutorials/random_numbers/lcg_bit_positions.shtml
https://www.javamex.com/tutorials/random_numbers/java_util_random_algorithm.shtml
https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/random/package-summary.html

https://isocpp.org/files/papers/n3551.pdf