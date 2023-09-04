import { NatureNames, StatName } from '@prisma/client';
import * as z from 'zod';

export const NatureModel = z.object({
  id: z.string(),
  name: z.nativeEnum(NatureNames),
  increased: z.nativeEnum(StatName).nullish(),
  decreased: z.nativeEnum(StatName).nullish(),
});
