import { sort } from "../sort";
import * as fc from "fast-check";
import { containSameValues, isSorted } from "./sort.properties";

describe("unit tests", () => {
  test("sorts a empty array", () => {
    expect(sort([])).toStrictEqual([]);
  });

  test("sorts a sorted array", () => {
    expect(sort([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

  test("sorts a random array", () => {
    expect(sort([3, 4, 2, 5, 1, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe.skip("Property-based tests - Sample", () => {
  const array = () =>
    fc.array(fc.integer({ min: -100, max: 100 }), { minLength: 1, maxLength: 10 });

  test("sample the inputs", () => {
    const inputs = fc.sample(array())
    inputs.forEach((input) => {
      console.log(input);
      
    })
  });
});

describe("Property-based tests", () => {
  const array = () =>
    fc.array(fc.integer({ min: -100, max: 100 }), { maxLength: 10 });

  test("the output contains the same values as the input", () => {
    fc.assert(
      fc.property(array(), (input) => {
        const output = sort(input);
        return containSameValues(input, output)
      })
    );
  });

  test("the output values are sorted in ascending order", () => {
    fc.assert(
      fc.property(array(), (list) => {
        const result = sort(list);
        return isSorted(result)
      })
    );
  });
});
