import * as z from 'zod';

export const AbilityModel = z.object({
  id: z.string(),
  name: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
});
