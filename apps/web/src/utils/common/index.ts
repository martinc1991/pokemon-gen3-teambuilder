// Typed Object.keys
export const getKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];

// Typed Object.values
export const getValues = Object.values as <T extends object>(obj: T) => T[keyof T][];

// Capitalize one string
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
