import { Tier } from '@prisma/client';

export const sortedTiers: Tier[] = ['uber', 'ou', 'uubl', 'uu', 'nu', 'publ', 'pu', 'nfe', 'lc'];

export const MAX_TEAM_MEMBERS = 6;

export const MAX_POKEMON_NAME_LENGTH = 18;

export const MIN_INDIVIDUAL_EV = 0;
export const MAX_INDIVIDUAL_EV = 252;
export const MAX_POSSIBLE_EVS = MAX_INDIVIDUAL_EV + MAX_INDIVIDUAL_EV + 4;

export const MIN_INDIVIDUAL_IV = 0;
export const MAX_INDIVIDUAL_IV = 31;

export const MIN_HAPPINESS = 0;
export const MAX_HAPPINESS = 255;

export const MIN_LEVEL = 1;
export const MAX_LEVEL = 100;
