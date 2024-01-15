import { z } from 'zod';
import { NatureNamesSchema } from '../inputTypeSchemas/NatureNamesSchema';
import { StatNameSchema } from '../inputTypeSchemas/StatNameSchema';

/////////////////////////////////////////
// NATURE SCHEMA
/////////////////////////////////////////

export const NatureSchema = z.object({
  name: NatureNamesSchema,
  increased: StatNameSchema.nullable(),
  decreased: StatNameSchema.nullable(),
  id: z.string().uuid(),
});

export type Nature = z.infer<typeof NatureSchema>;

export default NatureSchema;
