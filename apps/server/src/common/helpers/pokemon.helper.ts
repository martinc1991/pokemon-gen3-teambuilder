import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS } from 'contract';

export function isValidNationalPokedexInteger(value: unknown): boolean {
  return typeof value === 'number' && Number.isInteger(value) && value >= 1 && value <= LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS;
}

export function kebabToCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
