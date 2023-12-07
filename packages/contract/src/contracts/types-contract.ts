import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { TypeSchema } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

// Zod schemas
const getOneTypeResponseSchema = TypeSchema;
const getAllTypesResponseSchema = z.array(TypeSchema);

// Responses types
export type ITypesGetAllResponse = z.infer<typeof getAllTypesResponseSchema>;
export type ITypesGetAllResponseElement = ArrayElementType<ITypesGetAllResponse>;

export const typesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/types',
    responses: {
      200: getAllTypesResponseSchema,
    },
    summary: 'Get all types',
  },
  getOne: {
    method: 'GET',
    path: `/types/:typeName`,
    responses: {
      200: getOneTypeResponseSchema,
    },
    summary: 'Get a type by name',
  },
});

// Contract types
export type ITypesContract = typeof typesContract;
