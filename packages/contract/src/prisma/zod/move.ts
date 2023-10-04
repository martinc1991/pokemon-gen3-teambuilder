import { DamageClass, MoveTarget, TypeNames } from '@prisma/client';
import * as z from 'zod';
import { CompletePokemon, CompleteSlot, RelatedPokemonModel, RelatedSlotModel } from './index';

export const MoveModel = z.object({
  id: z.string(),
  name: z.string(),
  accuracy: z.number().int(),
  damageClass: z.nativeEnum(DamageClass),
  description: z.string(),
  power: z.number().int(),
  pp: z.number().int(),
  target: z.nativeEnum(MoveTarget),
  type: z.nativeEnum(TypeNames),
});

export interface CompleteMove extends z.infer<typeof MoveModel> {
  pokemon: CompletePokemon[];
  pokemonMoveOne: CompleteSlot[];
  pokemonMoveTwo: CompleteSlot[];
  pokemonMoveThree: CompleteSlot[];
  pokemonMoveFour: CompleteSlot[];
}

/**
 * RelatedMoveModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMoveModel: z.ZodSchema<CompleteMove> = z.lazy(() =>
  MoveModel.extend({
    pokemon: RelatedPokemonModel.array(),
    pokemonMoveOne: RelatedSlotModel.array(),
    pokemonMoveTwo: RelatedSlotModel.array(),
    pokemonMoveThree: RelatedSlotModel.array(),
    pokemonMoveFour: RelatedSlotModel.array(),
  })
);
