import { LAST_POKEMON_DEX_NUMBER } from '@config/app';

export function isValidNationalPokedexInteger(value: unknown): boolean {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= LAST_POKEMON_DEX_NUMBER
  );
}
