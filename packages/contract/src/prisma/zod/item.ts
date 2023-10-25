import * as z from 'zod';
import { CompleteSlot, RelatedSlotModel } from './index';

export const ItemModel = z.object({
  id: z.string(),
  name: z.string(),
  effect: z.string(),
  flingEffect: z.string().nullish(),
  flingPower: z.number().int().nullish(),
  sprite: z.string(),
});

export interface CompleteItem extends z.infer<typeof ItemModel> {
  slot: CompleteSlot[];
}

/**
 * RelatedItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedItemModel: z.ZodSchema<CompleteItem> = z.lazy(() =>
  ItemModel.extend({
    slot: RelatedSlotModel.array(),
  }),
);
