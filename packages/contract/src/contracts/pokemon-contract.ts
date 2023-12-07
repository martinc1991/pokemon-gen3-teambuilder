import { ClientInferResponseBody, initContract } from '@ts-rest/core';
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

// type GetAllPokemonResponse = Omit<CompletePokemon, 'typeOne' | 'typeTwo' | 'slot' | 'abilities' | 'learnset'> & { abilities: Ability[] };
// const getAllPokemonResponseSchema = z.custom<GetAllPokemonResponse>();

// type GetOnePokemonResponse = Omit<CompletePokemon, 'typeOne' | 'typeTwo' | 'slot' | 'abilities' | 'learnset'> & { abilities: Ability[] } & {
//   learnset: Move[];
// };
const getOnePokemonResponseSchema = PokemonSchema.merge(z.object({ abilities: z.array(AbilitySchema), learnset: z.array(MoveSchema) }));
const getAllPokemonResponseSchema = z.array(PokemonSchema.merge(z.object({ abilities: z.array(AbilitySchema) })));

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

// Contract type
export type IPokemonContract = typeof pokemonContract;
export type IPokemonGetAllQueryParams = z.infer<Required<typeof queryParamsSchema>>;

// Responses types
export type IPokemonGetAllResponse = ClientInferResponseBody<typeof pokemonContract.getAll, 200>;
export type IPokemonGetAllResponseElement = ArrayElementType<IPokemonGetAllResponse>;
