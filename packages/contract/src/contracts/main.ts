import { initContract } from '@ts-rest/core';
import { itemsContract } from './items-contract';
import { naturesContract } from './natures-contract';
import { pokemonContract } from './pokemon-contract';
import { postsContract } from './posts-contract';
import { teamsContract } from './teams-contract';
import { typesContract } from './types-contract';

const c = initContract();

export const mainContract = c.router({
  items: itemsContract,
  natures: naturesContract,
  pokemon: pokemonContract,
  posts: postsContract,
  teams: teamsContract,
  types: typesContract,
});

export type IMainContract = typeof mainContract;
