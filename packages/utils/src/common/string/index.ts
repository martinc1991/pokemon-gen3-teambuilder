import { Tier } from 'contract';

/**
 * Capitalizes first letter of a string.
 *
 * @param str - string to capitalize
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalizes each word in a string separated by whitespaces.
 *
 * @param str - string to capitalize each word
 */
export function capitalizeEach(str: string): string {
  return str.split(' ').map(capitalize).join(' ');
}

// Remove hyphens

/**
 * Replaces hyphens with whitespaces.
 *
 * @param str - string
 */
export function replaceHyphensWithSpaces(str: string): string {
  return str.replace(/-/g, ' ');
}
/**
 * Replaces whitespaces with hyphens.
 *
 * @param str - string
 */
export function replaceSpacesWithHyphens(str: string): string {
  return str.replace(/\s+/g, '-');
}

/**
 * Removes hyphens and the capitalize each word.
 * Usually it is the format used to display items, abilities, moves, etc, but not for pokemon.
 *
 * To format pokemon names use formatPokemonName function.
 *
 * @param str - string
 */
export function formatString(str: string): string {
  return capitalizeEach(replaceHyphensWithSpaces(str));
}

/**
 * Returns the formatted named of a tier.
 *
 * @param tier - tier
 */
export function getTierText(tier: Tier): string {
  if (tier === 'uber') return capitalize(tier);
  return tier.toUpperCase();
}
