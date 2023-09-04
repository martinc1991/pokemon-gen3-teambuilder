import { initContract } from '@ts-rest/core';
import { postsContract } from './posts-contract';
import { typesContract } from './types-contract';
import { itemsContract } from './items-contract';

const c = initContract();

export const mainContract = c.router({
  posts: postsContract,
  types: typesContract,
  items: itemsContract,
});

export type IMainContract = typeof mainContract;
