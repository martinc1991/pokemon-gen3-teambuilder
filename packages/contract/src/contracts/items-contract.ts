import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ItemSchema } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

// Zod schemas
const getOneItemResponseSchema = ItemSchema;
const getAllItemsResponseSchema = z.array(ItemSchema);

// Responses types
export type IItemsGetAllResponse = z.infer<typeof getAllItemsResponseSchema>;
export type IItemsGetAllResponseElement = ArrayElementType<IItemsGetAllResponse>;

export const itemsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/items',
    responses: {
      200: getAllItemsResponseSchema,
    },
    summary: 'Get all items',
  },
  getOne: {
    method: 'GET',
    path: `/items/:itemName`,
    responses: {
      200: getOneItemResponseSchema,
    },
    summary: 'Get a item by name',
  },
});

// Contract types
export type IItemsContract = typeof itemsContract;
