/**
 * Gets the keys of an object with correct typings.
 *
 * @returns {Array<keyof T>} - An array containing the keys of the object.
 *
 */
export const getKeys = Object.keys as <T extends object>(obj: T) => (keyof T)[];

/**
 * Gets the values of an object with correct typings.
 *
 * @returns {T[keyof T][]} - An array containing the values of the object.
 *
 */
export const getValues = Object.values as <T extends object>(obj: T) => T[keyof T][];
