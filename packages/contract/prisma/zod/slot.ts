import { NatureNames } from '@prisma/client';
import * as z from 'zod';

export const SlotModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  teamId: z.string(),
  nationalPokedexNumber: z.number().int(),
  order: z.number().int(),
  abilityName: z.string().nullish(),
  natureName: z.nativeEnum(NatureNames).nullish(),
  evHp: z.number().int(),
  evAttack: z.number().int(),
  evDefense: z.number().int(),
  evSpAttack: z.number().int(),
  evSpDefense: z.number().int(),
  evSpeed: z.number().int(),
  itemName: z.string().nullish(),
  shiny: z.boolean().nullish(),
});
