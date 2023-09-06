import * as z from 'zod';

export const TeamModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
});
