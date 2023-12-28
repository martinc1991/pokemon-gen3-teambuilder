// Typed Object.keys
export const getKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];

// Typed Object.values
export const getValues = Object.values as <T extends object>(obj: T) => T[keyof T][];

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Capitalize each word
export function capitalizeEach(str: string): string {
  return str.split(' ').map(capitalize).join(' ');
}

// Remove hyphens
export function replaceHyphensWithSpaces(inputString: string): string {
  // const result = inputString.replace(/-/g, ' ');
  return inputString.replace(/-/g, ' ');
}

// Removes hyphens and the capitalize each word
// Usually its the format used to display pokemon, items, abilities, moves, etc
export function formatString(str: string): string {
  return capitalizeEach(replaceHyphensWithSpaces(str));
}

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
