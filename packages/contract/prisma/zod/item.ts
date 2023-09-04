import * as z from 'zod';

export const ItemModel = z.object({
  id: z.string(),
  name: z.string(),
  effect: z.string(),
  flingEffect: z.string().nullish(),
  flingPower: z.number().int().nullish(),
  sprite: z.string(),
});
