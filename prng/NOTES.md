Why do we need randomness

- security
- simulation with unknown variables
- games


- how does a PRNG work?
- whats a seed? how does it work?
- is there such as thing as a bad seed?
- how do you evaluate the quality of a PRNG?

https://jnordberg.github.io/gif.js/


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