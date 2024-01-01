// Typed Object.keys
export const getKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];

// Typed Object.values
export const getValues = Object.values as <T extends object>(obj: T) => T[keyof T][];

export function findDuplicateStrings<T>(array1: T[], array2: T[]): T[] {
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

export function combineArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, currentArray) => result.concat(currentArray), []);
}

export function removeDuplicates<T>(array: T[]): T[] {
  const uniqueSet = new Set(array);
  return Array.from(uniqueSet);
}

export function combineAndRemoveDuplicates<T>(...arrays: T[][]): T[] {
  return removeDuplicates(combineArrays(...arrays));
}
