import { initContract } from '@ts-rest/core';
import { itemsContract } from './items-contract';
import { naturesContract } from './natures-contract';
import { postsContract } from './posts-contract';
import { typesContract } from './types-contract';
import { pokemonContract } from './pokemon-contract';

const c = initContract();

export const mainContract = c.router({
  items: itemsContract,
  natures: naturesContract,
  posts: postsContract,
  types: typesContract,
  pokemon: pokemonContract,
});

export type IMainContract = typeof mainContract;
