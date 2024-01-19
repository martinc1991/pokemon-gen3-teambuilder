import { StatsTable } from '../../types';

export const MAX_TEAM_MEMBERS = 6;

export const MAX_POKEMON_NAME_LENGTH = 18;

export const MIN_INDIVIDUAL_EV = 0;
export const MAX_INDIVIDUAL_EV = 252;
export const MAX_POSSIBLE_EVS = MAX_INDIVIDUAL_EV + MAX_INDIVIDUAL_EV + 4;
export const DEFAULT_EVS: StatsTable = {
  atk: MIN_INDIVIDUAL_EV,
  def: MIN_INDIVIDUAL_EV,
  hp: MIN_INDIVIDUAL_EV,
  spa: MIN_INDIVIDUAL_EV,
  spd: MIN_INDIVIDUAL_EV,
  spe: MIN_INDIVIDUAL_EV,
};

export const MIN_INDIVIDUAL_IV = 0;
export const MAX_INDIVIDUAL_IV = 31;
export const DEFAULT_IVS: StatsTable = {
  atk: MAX_INDIVIDUAL_IV,
  def: MAX_INDIVIDUAL_IV,
  hp: MAX_INDIVIDUAL_IV,
  spa: MAX_INDIVIDUAL_IV,
  spd: MAX_INDIVIDUAL_IV,
  spe: MAX_INDIVIDUAL_IV,
};

export const MIN_HAPPINESS = 0;
export const MAX_HAPPINESS = 255;

export const MIN_HP = 1; // shedinja
export const MAX_HP = 714;
export const MIN_ATK = 5;
export const MAX_ATK = 504;
export const MIN_DEF = 5;
export const MAX_DEF = 614;
export const MIN_SPA = 10;
export const MAX_SPA = 504;
export const MIN_SPD = 20;
export const MAX_SPD = 614;
export const MIN_SPE = 5;
export const MAX_SPE = 504;

export const MIN_LEVEL = 1;
export const MAX_LEVEL = 100;

export const LAST_POKEMON_DEX_NUMBER = 386;
export const LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS = 389; // Includes deoxys variations
