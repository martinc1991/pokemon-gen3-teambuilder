import { initContract } from '@ts-rest/core';
import { postsContract } from './posts-contract';
import { typesContract } from './types-contract';

const c = initContract();

export const mainContract = c.router({
  posts: postsContract,
  types: typesContract,
});

export type IMainContract = typeof mainContract;
