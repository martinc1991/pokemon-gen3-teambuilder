import { z } from 'zod';
import { DamageClassSchema } from '../inputTypeSchemas/DamageClassSchema';
import { MoveTargetSchema } from '../inputTypeSchemas/MoveTargetSchema';
import { TypeNamesSchema } from '../inputTypeSchemas/TypeNamesSchema';

/////////////////////////////////////////
// MOVE SCHEMA
/////////////////////////////////////////

export const MoveSchema = z.object({
  damageClass: DamageClassSchema,
  target: MoveTargetSchema,
  type: TypeNamesSchema,
  id: z.string().uuid(),
  name: z.string(),
  accuracy: z.number().int(),
  description: z.string(),
  power: z.number().int(),
  pp: z.number().int(),
});

export type Move = z.infer<typeof MoveSchema>;

export default MoveSchema;
