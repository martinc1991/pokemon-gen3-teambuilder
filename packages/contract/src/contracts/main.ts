import { initContract } from '@ts-rest/core';
import { itemsContract } from './items-contract';
import { naturesContract } from './natures-contract';
import { pokemonContract } from './pokemon-contract';
import { teamsContract } from './teams-contract';
import { typesContract } from './types-contract';

const c = initContract();

export const mainContract = c.router({
  items: itemsContract,
  natures: naturesContract,
  pokemon: pokemonContract,
  teams: teamsContract,
  types: typesContract,
});

// Contract types
export type IMainContract = typeof mainContract;
