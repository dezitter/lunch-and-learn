import { isEmpty, xor } from "lodash";

export const containSameValues = (first: number[], second: number[]) => {
  return first.length === second.length && isEmpty(xor(first, second));
};

export const isSorted = (array: number[]): boolean => {
  const len = array.length;

  if (len <= 1) return true;

  for (let i = 0; i < len - 1; i++) {
    if (array[i + 1] < array[i]) {
      return false;
    }
  }

  return true;
};
