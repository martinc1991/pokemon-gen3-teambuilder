import { z } from 'zod';

/////////////////////////////////////////
// ITEM SCHEMA
/////////////////////////////////////////

export const ItemSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  effect: z.string(),
  flingEffect: z.string().nullable(),
  flingPower: z.number().int().nullable(),
  sprite: z.string(),
});

export type Item = z.infer<typeof ItemSchema>;

export default ItemSchema;
