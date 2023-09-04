import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PokemonModel } from '../../prisma/zod';

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

export type IPokemonContract = typeof pokemonContract;
