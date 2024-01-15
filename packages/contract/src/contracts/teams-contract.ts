import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CommonResponseSchema, PaginationParamsSchema } from '../common';
import { TeamSchema } from '../prisma/zod';
import { CompleteTeamSchema, JSONSlotSchema, JSONTeamSchema } from '../types';

const c = initContract();

// Params schemas
const GetTeamsQueryParamsSchema = PaginationParamsSchema;

// Responses schemas
const GetOneTeamResponseSchema = CompleteTeamSchema;
const GetAllTeamsResponseSchema = z.array(JSONTeamSchema);
const GetSampleTeamsResponseSchema = z.array(JSONTeamSchema);

// Body schemas
const CreateTeamBodySchema = TeamSchema.omit({ id: true }).merge(z.object({ slots: JSONSlotSchema }));
const EditTeamBodySchema = TeamSchema.merge(z.object({ slots: JSONSlotSchema })).optional();
const DeleteTeamBodySchema = TeamSchema.pick({ id: true });

export const teamsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/teams',
    query: GetTeamsQueryParamsSchema,
    responses: {
      200: GetAllTeamsResponseSchema,
    },
    summary: 'Get all teams',
  },
  getOne: {
    method: 'GET',
    path: `/teams/:teamId`,
    responses: {
      200: GetOneTeamResponseSchema,
    },
    summary: 'Get a team by id',
  },
  getSampleTeams: {
    method: 'GET',
    path: `/teams/sample`,
    query: GetTeamsQueryParamsSchema,
    responses: {
      200: GetSampleTeamsResponseSchema,
    },
    summary: 'Get sample teams',
  },
  create: {
    method: 'POST',
    path: `/teams`,
    body: CreateTeamBodySchema,
    responses: {
      201: CommonResponseSchema,
    },
    summary: 'Create a team',
  },
  edit: {
    method: 'PATCH',
    path: `/teams`,
    body: EditTeamBodySchema,
    responses: {
      200: CommonResponseSchema,
    },
    summary: 'Edit a team by id',
  },
  delete: {
    method: 'DELETE',
    path: `/teams`,
    body: DeleteTeamBodySchema,
    responses: {
      200: CommonResponseSchema,
    },
    summary: 'Delete a team by id',
  },
});

// Contract types
export type ITeamsContract = typeof teamsContract;
