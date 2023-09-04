import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { TypeModel } from '../../prisma/zod';

const c = initContract();

export const typesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/types',
    responses: {
      200: z.array(TypeModel),
    },
    summary: 'Get all types',
  },
  getOne: {
    method: 'GET',
    path: `/types/:typeName`,
    responses: {
      200: TypeModel,
    },
    summary: 'Get a type by name',
  },
});

export type ITypesContract = typeof typesContract;

export const TESSSST = 'TESTSDSS';
