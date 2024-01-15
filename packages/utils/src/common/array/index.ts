/**
 * Finds duplicates in two arrays.
 *
 * @returns An array with the duplicates or an empty array is none is found.
 *
 */
export function findDuplicates<T>(array1: T[], array2: T[]): T[] {
  const duplicates: T[] = [];

  const set1 = new Set(array1);
  const set2 = new Set(array2);

  set1.forEach((item) => {
    if (set2.has(item)) {
      duplicates.push(item);
    }
  });

  return duplicates;
}

/**
 * Concatenates any given number of arrays of the same type.
 * The type of the resulting array matches the type of the first array passed.
 *
 * @returns A concatenated array or an empty array is none or all empty are provided.
 *
 */
export function combineArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, currentArray) => result.concat(currentArray), []);
}

/**
 * Removes duplicates from an array.
 *
 */
export function removeDuplicates<T>(array: T[]): T[] {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

/**
 * Concatenates any given number of arrays removing duplicates too.
 *
 * @returns A concatenated array or an empty array is none or all empty are provided.
 *
 */
export function combineAndRemoveDuplicates<T>(...arrays: T[][]): T[] {
  return removeDuplicates(combineArrays(...arrays));
}
