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
