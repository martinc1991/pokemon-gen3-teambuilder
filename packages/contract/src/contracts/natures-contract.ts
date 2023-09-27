import { ClientInferResponseBody, initContract } from '@ts-rest/core';
import { z } from 'zod';
import { NatureModel } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

export const naturesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/natures',
    responses: {
      200: z.array(NatureModel),
    },
    summary: 'Get all natures',
  },
  getOne: {
    method: 'GET',
    path: `/natures/:natureName`,
    responses: {
      200: NatureModel,
    },
    summary: 'Get a nature by name',
  },
});

// Contract type
export type INaturesContract = typeof naturesContract;

// Responses types
export type INatureGetAllResponse = ClientInferResponseBody<typeof naturesContract.getAll, 200>;
export type INatureGetAllResponseElement = ArrayElementType<INatureGetAllResponse>;
