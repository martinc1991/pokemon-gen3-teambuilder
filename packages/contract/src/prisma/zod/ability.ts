import * as z from 'zod';
import { CompletePokemon, CompleteSlot, RelatedPokemonModel, RelatedSlotModel } from './index';

export const AbilityModel = z.object({
  id: z.string(),
  name: z.string(),
  shortDescription: z.string(),
  longDescription: z.string(),
});

export interface CompleteAbility extends z.infer<typeof AbilityModel> {
  Pokemon: CompletePokemon[];
  slots: CompleteSlot[];
}

/**
 * RelatedAbilityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAbilityModel: z.ZodSchema<CompleteAbility> = z.lazy(() =>
  AbilityModel.extend({
    Pokemon: RelatedPokemonModel.array(),
    slots: RelatedSlotModel.array(),
  }),
);
