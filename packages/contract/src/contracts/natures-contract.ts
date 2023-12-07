import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { NatureSchema } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

// Zod schemas
const getOneNatureResponseSchema = NatureSchema;
const getAllNaturesResponseSchema = z.array(NatureSchema);

// Responses types
export type INatureGetAllResponse = z.infer<typeof getAllNaturesResponseSchema>;
export type INatureGetAllResponseElement = ArrayElementType<INatureGetAllResponse>;

export const naturesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/natures',
    responses: {
      200: getAllNaturesResponseSchema,
    },
    summary: 'Get all natures',
  },
  getOne: {
    method: 'GET',
    path: `/natures/:natureName`,
    responses: {
      200: getOneNatureResponseSchema,
    },
    summary: 'Get a nature by name',
  },
});

// Contract types
export type INaturesContract = typeof naturesContract;
