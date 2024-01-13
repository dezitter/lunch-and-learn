import { sort } from "../sort";
import * as fc from "fast-check";
import { isSorted } from "./sort.properties";

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

describe.skip("Property-based tests", () => {
  const array = () =>
    fc.array(fc.integer({ min: -100, max: 100 }), { maxLength: 10 });

  test("sort returns a sorted array", () => {
    fc.property(array(), (list) => {
      expect(isSorted(sort(list))).toBe(true);
    });
  });

});
