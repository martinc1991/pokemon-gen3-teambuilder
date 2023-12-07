import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { TypeSchema } from '../prisma/zod';

const c = initContract();

export const typesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/types',
    responses: {
      200: z.array(TypeSchema),
    },
    summary: 'Get all types',
  },
  getOne: {
    method: 'GET',
    path: `/types/:typeName`,
    responses: {
      200: TypeSchema,
    },
    summary: 'Get a type by name',
  },
});

export type ITypesContract = typeof typesContract;
