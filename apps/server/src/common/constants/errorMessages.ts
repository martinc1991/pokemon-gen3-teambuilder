import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS } from 'contract';

export const ERROR_MESSAGES = {
  NOT_VALID_POKEDEX_NUMBER: `nationalPokedexNumber must be an integer between 1 and ${LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS}`,
  NOT_VALID_ABILITY_NAME: `abilityName must match one of the possible ability names`,
  MUST_BE_STRING: `must be a string`,
};
