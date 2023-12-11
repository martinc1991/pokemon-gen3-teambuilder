import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { AbilitySchema, MoveSchema, PokemonSchema } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

const queryParamsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  orderBy: z.string().optional(),
  sortOrder: z.string().optional(),
});

// Zod schemas
const getOnePokemonResponseSchema = PokemonSchema.merge(z.object({ abilities: z.array(AbilitySchema), learnset: z.array(MoveSchema) }));
const getAllPokemonResponseSchema = z.array(PokemonSchema.merge(z.object({ abilities: z.array(AbilitySchema) })));

// Responses types
export type IPokemonGetOneResponse = z.infer<typeof getOnePokemonResponseSchema>;
export type IPokemonGetAllResponse = z.infer<typeof getAllPokemonResponseSchema>;
export type IPokemonGetAllResponseElement = ArrayElementType<IPokemonGetAllResponse>; // Type for each element of the getAll method response

export const pokemonContract = c.router({
  getAll: {
    method: 'GET',
    path: '/pokemon',
    responses: {
      200: getAllPokemonResponseSchema,
    },
    query: queryParamsSchema,
    summary: 'Get all pokemon',
  },
  getOne: {
    method: 'GET',
    path: `/pokemon/:nationalDexNumber`,
    responses: {
      200: getOnePokemonResponseSchema,
    },
    summary: 'Get a pokemon by national pokedex number',
  },
});

// Contract types
export type IPokemonContract = typeof pokemonContract;
export type IPokemonGetAllQueryParams = z.infer<Required<typeof queryParamsSchema>>;
