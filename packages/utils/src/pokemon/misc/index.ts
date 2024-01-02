import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS } from 'contract';

/**
 * Returns true if the value passed is an integer and is between 1 a 389.
 *
 * @param num - National pokedex number
 */
export function isValidNationalPokedexNumber(num: unknown): boolean {
  return typeof num === 'number' && Number.isInteger(num) && num >= 1 && num <= LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS;
}
