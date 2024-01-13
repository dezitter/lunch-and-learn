export const isSorted = (array) => {
  const len = array.length;

  if (len <= 1) return true;

  for (let i = 0; i < len - 1; i++) {
    if (array[i + 1] < array[i]) {
      return false;
    }
  }

  return true;
};
