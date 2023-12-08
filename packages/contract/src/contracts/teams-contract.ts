import { NatureNames } from '@prisma/client';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS, MAX_INDIVIDUAL_EV } from '../constants';
import { TeamSchema } from '../prisma/zod';
import { ArrayElementType } from '../utils/types/array-element-type';

const c = initContract();

const queryParamsSchema = z.object({
  take: z.string().transform(Number).optional().default('10'),
  skip: z.string().transform(Number).optional().default('0'),
});

const commonResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
});

// Zod schemas
const getOneTeamResponseSchema = TeamSchema;
const getAllTeamResponseSchema = z.array(TeamSchema);
const createTeamBodySchema = z.object({
  name: z.string().optional(),
  slots: z
    .array(
      z.object({
        nationalPokedexNumber: z.number().min(1).max(LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS),
        name: z.string().optional(),
        abilityName: z.string().optional(),
        natureName: z.nativeEnum(NatureNames).optional(),
        evHp: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        evAttack: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        evDefense: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        evSpAttack: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        evSpDefense: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        evSpeed: z.number().min(0).max(MAX_INDIVIDUAL_EV).optional(),
        itemName: z.string().optional(),
        shiny: z.boolean().optional(),
      }),
    )
    .optional(),
}); // TODO: replace with SlotSchema
const editTeamBodySchema = createTeamBodySchema.merge(z.object({ id: z.string() }));
const deleteTeamBodySchema = z.object({ id: z.string() });

// Responses types
export type ITeamGetOneResponse = z.infer<typeof getOneTeamResponseSchema>;
export type ITeamGetAllResponse = z.infer<typeof getAllTeamResponseSchema>;
export type ITeamGetAllResponseElement = ArrayElementType<ITeamGetAllResponse>; // Type for each element of the getAll method response

export const teamsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/teams',
    query: queryParamsSchema,
    responses: {
      200: getAllTeamResponseSchema,
    },
    summary: 'Get all teams',
  },
  getOne: {
    method: 'GET',
    path: `/teams/:teamId`,
    responses: {
      200: getOneTeamResponseSchema,
    },
    summary: 'Get a team by id',
  },
  create: {
    method: 'POST',
    path: `/teams`,
    body: createTeamBodySchema,
    responses: {
      201: commonResponseSchema,
    },
    summary: 'Create a team',
  },
  edit: {
    method: 'PATCH',
    path: `/teams`,
    body: editTeamBodySchema,
    responses: {
      200: commonResponseSchema,
    },
    summary: 'Edit a team by id',
  },
  delete: {
    method: 'DELETE',
    path: `/teams`,
    body: deleteTeamBodySchema,
    responses: {
      200: commonResponseSchema,
    },
    summary: 'Delete a team by id',
  },
});

// Contract types
export type ITeamsContract = typeof teamsContract;
