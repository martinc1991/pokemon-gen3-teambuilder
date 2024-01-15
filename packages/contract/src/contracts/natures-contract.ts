import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { NatureSchema } from '../prisma/zod';

const c = initContract();

// Responses types
const GetOneNatureResponseSchema = NatureSchema;
const GetAllNaturesResponseSchema = z.array(NatureSchema);

export const naturesContract = c.router({
  getAll: {
    method: 'GET',
    path: '/natures',
    responses: {
      200: GetAllNaturesResponseSchema,
    },
    summary: 'Get all natures',
  },
  getOne: {
    method: 'GET',
    path: `/natures/:natureName`,
    responses: {
      200: GetOneNatureResponseSchema,
    },
    summary: 'Get a nature by name',
  },
});

// Contract types
export type INaturesContract = typeof naturesContract;
