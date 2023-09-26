import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ItemModel } from '../prisma/zod';

const c = initContract();

export const itemsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/items',
    responses: {
      200: z.array(ItemModel),
    },
    summary: 'Get all items',
  },
  getOne: {
    method: 'GET',
    path: `/items/:itemName`,
    responses: {
      200: ItemModel,
    },
    summary: 'Get a item by name',
  },
});

export type IItemsContract = typeof itemsContract;
