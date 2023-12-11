import { z } from 'zod';

/////////////////////////////////////////
// ABILITY SCHEMA
/////////////////////////////////////////

export const AbilitySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
});

export type Ability = z.infer<typeof AbilitySchema>;

export default AbilitySchema;
