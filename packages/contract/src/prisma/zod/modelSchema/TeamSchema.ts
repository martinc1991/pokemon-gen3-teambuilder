import { z } from 'zod';

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  userName: z.string(),
  slots: z.string(),
  isSample: z.boolean(),
  isPublic: z.boolean(),
});

export type Team = z.infer<typeof TeamSchema>;

export default TeamSchema;
