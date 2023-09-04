import { initContract } from '@ts-rest/core';
import { itemsContract } from './items-contract';
import { naturesContract } from './natures-contract';
import { postsContract } from './posts-contract';
import { typesContract } from './types-contract';

const c = initContract();

export const mainContract = c.router({
  items: itemsContract,
  natures: naturesContract,
  posts: postsContract,
  types: typesContract,
});

export type IMainContract = typeof mainContract;
