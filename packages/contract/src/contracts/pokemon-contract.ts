import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PokemonWithAbilitiesAndLearnsetSchema, PokemonWithAbilitiesSchema } from '../index';

const c = initContract();

const queryParamsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  orderBy: z.string().optional(),
  sortOrder: z.string().optional(),
});

// Response schemas
const GetOnePokemonResponseSchema = PokemonWithAbilitiesAndLearnsetSchema;
const GetAllPokemonResponseSchema = z.array(PokemonWithAbilitiesSchema);

export const pokemonContract = c.router({
  getAll: {
    method: 'GET',
    path: '/pokemon',
    responses: {
      200: GetAllPokemonResponseSchema,
    },
    query: queryParamsSchema,
    summary: 'Get all pokemon',
  },
  getOne: {
    method: 'GET',
    path: `/pokemon/:nationalDexNumber`,
    responses: {
      200: GetOnePokemonResponseSchema,
    },
    summary: 'Get a pokemon by national pokedex number',
  },
});

// Contract types
export type IPokemonContract = typeof pokemonContract;
export type IPokemonGetAllQueryParams = z.infer<Required<typeof queryParamsSchema>>;
