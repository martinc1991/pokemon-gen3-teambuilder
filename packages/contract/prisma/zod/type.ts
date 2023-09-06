import { DamageClass, TypeNames } from '@prisma/client';
import * as z from 'zod';

export const TypeModel = z.object({
  id: z.string(),
  name: z.nativeEnum(TypeNames),
  damageClass: z.nativeEnum(DamageClass),
  noDamageTo: z.nativeEnum(TypeNames).array(),
  halfDamageTo: z.nativeEnum(TypeNames).array(),
  doubleDamageTo: z.nativeEnum(TypeNames).array(),
  noDamageFrom: z.nativeEnum(TypeNames).array(),
  halfDamageFrom: z.nativeEnum(TypeNames).array(),
  doubleDamageFrom: z.nativeEnum(TypeNames).array(),
});
