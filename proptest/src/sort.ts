const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length - 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
};
export const sort = selectionSort;
