import { DamageClass, TypeNames } from '@prisma/client';
import * as z from 'zod';
import { CompletePokemon, RelatedPokemonModel } from './index';

export const TypeModel = z.object({
  id: z.string(),
  name: z.nativeEnum(TypeNames),
  damageClass: z.nativeEnum(DamageClass),
  noDamageTo: z.nativeEnum(TypeNames).array(),
  halfDamageTo: z.nativeEnum(TypeNames).array(),
  doubleDamageTo: z.nativeEnum(TypeNames).array(),
  noDamageFrom: z.nativeEnum(TypeNames).array(),
  halfDamageFrom: z.nativeEnum(TypeNames).array(),
  doubleDamageFrom: z.nativeEnum(TypeNames).array(),
});

export interface CompleteType extends z.infer<typeof TypeModel> {
  pokemonTypeOne: CompletePokemon[];
  pokemonTypeTwo: CompletePokemon[];
}

/**
 * RelatedTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTypeModel: z.ZodSchema<CompleteType> = z.lazy(() =>
  TypeModel.extend({
    pokemonTypeOne: RelatedPokemonModel.array(),
    pokemonTypeTwo: RelatedPokemonModel.array(),
  })
);
