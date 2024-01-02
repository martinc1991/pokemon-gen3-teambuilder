import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS } from 'contract';
import { replaceSpacesWithHyphens } from '../../common';

/**
 * Returns true if the value passed is an integer and is between 1 a 389.
 *
 * @param num - National pokedex number
 */
export function isValidNationalPokedexNumber(num: unknown): boolean {
  return typeof num === 'number' && Number.isInteger(num) && num >= 1 && num <= LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS;
}

/**
 * Formats the raw (DB) name of a pokemon.
 * Should always be used to display pokemon names in UI elements.
 *
 * @param name - name of the pokemon
 * @example formatPokemonName('deoxys-speed') // Deoxys-Speed
 */
export function formatPokemonName(name: string): string {
  return replaceSpacesWithHyphens(name)
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('-');
}
