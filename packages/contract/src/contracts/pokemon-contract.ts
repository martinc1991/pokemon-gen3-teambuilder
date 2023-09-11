import { ClientInferResponseBody, initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PokemonModel } from '../../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

export const pokemonContract = c.router({
  getAll: {
    method: 'GET',
    path: '/pokemon',
    responses: {
      200: z.array(PokemonModel),
    },
    query: z.object({
      take: z.string().transform(Number).optional(),
      skip: z.string().transform(Number).optional(),
      orderBy: z.string().optional(),
      sortOrder: z.string().optional(),
    }),
    summary: 'Get all pokemon',
  },
  getOne: {
    method: 'GET',
    path: `/pokemon/:nationalDexNumber`,
    responses: {
      200: PokemonModel,
    },
    summary: 'Get a pokemon by national pokedex number',
  },
});

// Contract type
export type IPokemonContract = typeof pokemonContract;

// Responses types
export type IPokemonGetAllResponse = ClientInferResponseBody<typeof pokemonContract.getAll, 200>;
export type IPokemonGetAllResponseElement = ArrayElementType<IPokemonGetAllResponse>;
