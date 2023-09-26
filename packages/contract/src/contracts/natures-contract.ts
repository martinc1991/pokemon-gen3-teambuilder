import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { NatureModel } from '../prisma/zod';

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

export type INaturesContract = typeof naturesContract;
