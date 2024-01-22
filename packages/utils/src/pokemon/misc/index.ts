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

/**
 * Return the icon url from the nationalPokedexNumber.
 */
export function getPokemonIconUrl(nationalPokedexNumber: number): string {
  if (!isValidNationalPokedexNumber(nationalPokedexNumber)) return '';

  const base = 'https://www.serebii.net/pokedex-rs/icon/';
  switch (true) {
    case nationalPokedexNumber >= 386:
      return `${base}386.gif`;
    default:
      const num = nationalPokedexNumber.toString().padStart(3, '0');
      return `${base}${num}.gif`;
  }
}

/**
 * Return the sprite url from the nationalPokedexNumber.
 */
export function getPokemonSpriteUrl(nationalPokedexNumber: number, shiny = false): string {
  if (!isValidNationalPokedexNumber(nationalPokedexNumber)) return '';

  const base = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/';

  const shinyString = shiny ? '/shiny' : '';

  switch (true) {
    case nationalPokedexNumber === 387:
      return `${base}firered-leafgreen${shinyString}/386-attack.png`;
    case nationalPokedexNumber === 388:
      return `${base}firered-leafgreen${shinyString}/386-defense.png`;
    case nationalPokedexNumber === 389:
      return `${base}emerald${shinyString}/386-speed.png`;
    default:
      return `${base}emerald${shinyString}/${nationalPokedexNumber}.png`;
  }
}
