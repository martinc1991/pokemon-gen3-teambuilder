import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PaginationParamsSchema, SortOrderParamsSchema } from '../common';
import { PokemonWithAbilitiesAndLearnsetSchema, PokemonWithAbilitiesSchema } from '../types';

const c = initContract();

const TypesParamsSchema = z.object({
  typeOne: z.string().optional(),
  typeTwo: z.string().optional(),
});

// Params schemas
const GetAllPokemonQueryParamsSchema = PaginationParamsSchema.merge(SortOrderParamsSchema).merge(TypesParamsSchema);

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
    query: GetAllPokemonQueryParamsSchema,
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
export type IPokemonGetAllQueryParams = z.infer<Required<typeof GetAllPokemonQueryParamsSchema>>;
