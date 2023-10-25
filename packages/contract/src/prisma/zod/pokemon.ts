import { Gender, Tier, TypeNames } from '@prisma/client';
import * as z from 'zod';
import {
  CompleteAbility,
  CompleteMove,
  CompleteSlot,
  CompleteType,
  RelatedAbilityModel,
  RelatedMoveModel,
  RelatedSlotModel,
  RelatedTypeModel,
} from './index';

export const PokemonModel = z.object({
  id: z.string(),
  name: z.string(),
  nationalPokedexNumber: z.number().int(),
  sprite: z.string(),
  icon: z.string(),
  height: z.number().int(),
  weight: z.number().int(),
  typeOneName: z.nativeEnum(TypeNames),
  typeTwoName: z.nativeEnum(TypeNames),
  genders: z.nativeEnum(Gender).array(),
  tier: z.nativeEnum(Tier),
  baseHp: z.number().int(),
  baseAttack: z.number().int(),
  baseDefense: z.number().int(),
  baseSpattack: z.number().int(),
  baseSpdefense: z.number().int(),
  baseSpeed: z.number().int(),
});

export interface CompletePokemon extends z.infer<typeof PokemonModel> {
  typeOne: CompleteType;
  typeTwo?: CompleteType | null;
  slot: CompleteSlot[];
  abilities: CompleteAbility[];
  learnset: CompleteMove[];
}

/**
 * RelatedPokemonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPokemonModel: z.ZodSchema<CompletePokemon> = z.lazy(() =>
  PokemonModel.extend({
    typeOne: RelatedTypeModel,
    typeTwo: RelatedTypeModel.nullish(),
    slot: RelatedSlotModel.array(),
    abilities: RelatedAbilityModel.array(),
    learnset: RelatedMoveModel.array(),
  }),
);
