import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ItemSchema } from '../prisma/zod';

const c = initContract();

// Zod schemas
const GetOneItemResponseSchema = ItemSchema;
const GetAllItemsResponseSchema = z.array(ItemSchema);

export const itemsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/items',
    responses: {
      200: GetAllItemsResponseSchema,
    },
    summary: 'Get all items',
  },
  getOne: {
    method: 'GET',
    path: `/items/:itemName`,
    responses: {
      200: GetOneItemResponseSchema,
    },
    summary: 'Get a item by name',
  },
});

// Contract types
export type IItemsContract = typeof itemsContract;
