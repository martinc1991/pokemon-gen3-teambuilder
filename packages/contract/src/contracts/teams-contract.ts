import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { TeamModel } from '../../prisma/zod';
import { NatureNames } from '@prisma/client';

const c = initContract();

export const teamsContract = c.router({
  getAll: {
    method: 'GET',
    path: '/teams',
    query: z.object({
      take: z.string().transform(Number).optional().default('10'),
      skip: z.string().transform(Number).optional().default('0'),
    }),
    responses: {
      200: z.array(TeamModel),
    },
    summary: 'Get all teams',
  },
  getOne: {
    method: 'GET',
    path: `/teams/:teamId`,
    responses: {
      200: TeamModel,
    },
    summary: 'Get a team by id',
  },
  create: {
    method: 'POST',
    path: `/teams`,
    body: z.object({
      name: z.string().optional(),
      slots: z
        .array(
          z.object({
            nationalPokedexNumber: z.number().min(1).max(386),
            name: z.string().optional(),
            abilityName: z.string().optional(),
            natureName: z.nativeEnum(NatureNames).optional(),
            evHp: z.number().min(0).max(255).optional(),
            evAttack: z.number().min(0).max(255).optional(),
            evDefense: z.number().min(0).max(255).optional(),
            evSpAttack: z.number().min(0).max(255).optional(),
            evSpDefense: z.number().min(0).max(255).optional(),
            evSpeed: z.number().min(0).max(255).optional(),
            itemName: z.string().optional(),
            shiny: z.boolean().optional(),
          })
        )
        .optional(),
    }),
    responses: {
      201: z.object({
        id: z.string(),
        name: z.string(),
      }),
    },
    summary: 'Create a team',
  },
  delete: {
    method: 'DELETE',
    path: `/teams`,
    body: z.object({
      id: z.string(),
    }),
    responses: {
      200: z.object({
        id: z.string(),
        name: z.string(),
      }),
    },
    summary: 'Delete a team by id',
  },
  edit: {
    method: 'PATCH',
    path: `/teams`,
    body: z.object({
      id: z.string(),
      name: z.string().optional(),
      slots: z
        .array(
          z.object({
            nationalPokedexNumber: z.number().min(1).max(386),
            name: z.string().optional(),
            abilityName: z.string().optional(),
            natureName: z.nativeEnum(NatureNames).optional(),
            evHp: z.number().min(0).max(255).optional(),
            evAttack: z.number().min(0).max(255).optional(),
            evDefense: z.number().min(0).max(255).optional(),
            evSpAttack: z.number().min(0).max(255).optional(),
            evSpDefense: z.number().min(0).max(255).optional(),
            evSpeed: z.number().min(0).max(255).optional(),
            itemName: z.string().optional(),
            shiny: z.boolean().optional(),
          })
        )
        .optional(),
    }),
    responses: {
      200: z.object({
        id: z.string(),
        name: z.string(),
      }),
    },
    summary: 'Edit a team by id',
  },
});

export type ITeamsContract = typeof teamsContract;
