import { Gender, Tier, TypeNames } from '@prisma/client';
import * as z from 'zod';

export const PokemonModel = z.object({
  id: z.string(),
  name: z.string(),
  nationalPokedexNumber: z.number().int(),
  sprite: z.string(),
  height: z.number().int(),
  weight: z.number().int(),
  typeOneName: z.nativeEnum(TypeNames),
  typeTwoName: z.nativeEnum(TypeNames),
  genders: z.nativeEnum(Gender).array(),
  tier: z.nativeEnum(Tier),
});
