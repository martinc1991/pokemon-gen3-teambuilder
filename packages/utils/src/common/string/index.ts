/**
 * Capitalizes first letter of a string.
 *
 * @param str - string to capitalize
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalizes each word in a string.
 *
 * @param str - string to capitalize each word
 */
export function capitalizeEach(str: string): string {
  return str.split(' ').map(capitalize).join(' ');
}

// Remove hyphens

/**
 * Replaces hyphens with spaces.
 *
 * @param str - string
 */
export function replaceHyphensWithSpaces(str: string): string {
  return str.replace(/-/g, ' ');
}

/**
 * Removes hyphens and the capitalize each word.
 * Usually it is the format used to display pokemon, items, abilities, moves, etc.
 *
 * @param str - string
 */
export function formatString(str: string): string {
  return capitalizeEach(replaceHyphensWithSpaces(str));
}
