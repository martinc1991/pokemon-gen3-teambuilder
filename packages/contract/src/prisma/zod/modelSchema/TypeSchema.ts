import { z } from 'zod';
import { DamageClassSchema } from '../inputTypeSchemas/DamageClassSchema';
import { TypeNamesSchema } from '../inputTypeSchemas/TypeNamesSchema';

/////////////////////////////////////////
// TYPE SCHEMA
/////////////////////////////////////////

export const TypeSchema = z.object({
  name: TypeNamesSchema,
  damageClass: DamageClassSchema,
  noDamageTo: TypeNamesSchema.array(),
  halfDamageTo: TypeNamesSchema.array(),
  doubleDamageTo: TypeNamesSchema.array(),
  noDamageFrom: TypeNamesSchema.array(),
  halfDamageFrom: TypeNamesSchema.array(),
  doubleDamageFrom: TypeNamesSchema.array(),
  id: z.string().uuid(),
});

export type Type = z.infer<typeof TypeSchema>;

export default TypeSchema;
