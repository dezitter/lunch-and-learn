Live Coding => Start with a blank file

To avoid boredom, demo something great first, **then** show how its built

Prepare a roadmap for the talk, not word-by-word speaker notes

Example:

- 1 Remind of a common problem
- 2 Demo how to magically solve it
- 3. Slowly teach how its built

Or tell a story

Example should be short but real-world enough

VsCode Settings

- GitHub/GitLab theme, familiar to most
- 


On the day:

CHeck the rendering on presenting screen, walk all the way at the back to see if font size needs adjusting



Roadmap

1. Demo!
2. Example-Based Testing
3. Property-Based Testing

What is proptest

- another way to test software
- contrast to **example-based testing**
- proptest checks that a function abides by a property
- invented in 2000, John Hughes and Koen Clasessen invented QuickCheck for the Haskell community

What's a property

- a useful characteristic of the output
- doesn't care too much of the output itself
- without _precise_ knowledge of the content of the output, we can make assertion on its shape and content
- exmaple: a + b + c contains b
- more formally: `for all (x, y, ...) => poperty(x, y, ...) is true`

How does it work

- proptest framework will
- **generate inputs** in an effort to find one for which your property doesn't hold
- in case of failure, shrinks to get a minimal input
- common terms arbitrary/generator/strategy

Benefit of proptest

- covers a large scope of inputs
- can find bugs for inputs you have not considered
- shrinks the input in case of failure
- replayable

Hands on!

# Roadmap

1. Give an example, e.g. sorting an array
2. Show current way of testing, and the limitations (limited scope, always the same input)

- Is that enough, how much is enough?
- Are there weird corner cases?
- How many cases do I cover out of all possible inputs?

3. Demo prop based testing (`fc.sample`)
4. What is proptest, a property?
5. Build a quick test
6. Shrinking

# Poll for feedback after the presentation

- Did you like the topic?
- Did you like the format?
- If you could change one thing from the presentation, what would it be?

# Expected questions

- Can I write my own generators?
- YES you can easily combine existing generators
- How does shrinking work?
- Can I use proptest to test UI?
- proptest framework can generate _commands_ which are applied to the UI
- example?

# Resources

- https://medium.com/criteo-engineering/introduction-to-property-based-testing-f5236229d237
- https://engineering.atspotify.com/2015/06/rapid-check/
- https://hypothesis.works/articles/what-is-hypothesis/

# Buffer

https://hypothesis.works/articles/testing-performance-optimizations/
https://hypothesis.works/articles/how-hypothesis-works/
https://github.com/dubzzz/fast-check/tree/main/examples
https://www.youtube.com/watch?v=hXnS_Xjwk2Y
https://medium.com/@nicolasdubien/find-the-best-properties-for-property-based-testing-ee2ed9d442e1
https://medium.com/criteo-engineering/detecting-the-unexpected-in-web-ui-fuzzing-1f3822c8a3a5
https://hypothesis.works/articles/
https://medium.com/@nicolasdubien/your-own-property-based-testing-framework-part-1-generators-eeb6cccb84d0
https://medium.com/@nicolasdubien/your-own-property-based-testing-framework-part-2-runners-5c5e083c1b8
https://medium.com/@nicolasdubien/your-own-property-based-testing-framework-part-3-shrinkers-564fa7a180eb
https://medium.com/@nicolasdubien/your-own-property-based-testing-framework-part-4-runners-with-shrink-92b0711130e5