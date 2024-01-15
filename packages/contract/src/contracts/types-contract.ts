import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { TypeSchema } from '../prisma/zod';

const c = initContract();

// Responses types
const GetOneTypeResponseSchema = TypeSchema;
const GetAllTypesResponseSchema = z.array(TypeSchema);

export const typesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/types',
    responses: {
      200: GetAllTypesResponseSchema,
    },
    summary: 'Get all types',
  },
  getOne: {
    method: 'GET',
    path: `/types/:typeName`,
    responses: {
      200: GetOneTypeResponseSchema,
    },
    summary: 'Get a type by name',
  },
});

// Contract types
export type ITypesContract = typeof typesContract;
