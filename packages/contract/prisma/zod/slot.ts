import { Gender, NatureNames } from '@prisma/client';
import * as z from 'zod';
import {
  CompleteAbility,
  CompleteItem,
  CompleteNature,
  CompletePokemon,
  CompleteTeam,
  RelatedAbilityModel,
  RelatedItemModel,
  RelatedNatureModel,
  RelatedPokemonModel,
  RelatedTeamModel,
} from './index';

export const SlotModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  teamId: z.string(),
  nationalPokedexNumber: z.number().int(),
  order: z.number().int(),
  abilityName: z.string().nullish(),
  natureName: z.nativeEnum(NatureNames).nullish(),
  evHp: z.number().int(),
  evAttack: z.number().int(),
  evDefense: z.number().int(),
  evSpAttack: z.number().int(),
  evSpDefense: z.number().int(),
  evSpeed: z.number().int(),
  itemName: z.string().nullish(),
  shiny: z.boolean().nullish(),
  gender: z.nativeEnum(Gender),
  level: z.number().int(),
  happiness: z.number().int(),
});

export interface CompleteSlot extends z.infer<typeof SlotModel> {
  team: CompleteTeam;
  pokemon: CompletePokemon;
  ability?: CompleteAbility | null;
  nature?: CompleteNature | null;
  item?: CompleteItem | null;
}

/**
 * RelatedSlotModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSlotModel: z.ZodSchema<CompleteSlot> = z.lazy(() =>
  SlotModel.extend({
    team: RelatedTeamModel,
    pokemon: RelatedPokemonModel,
    ability: RelatedAbilityModel.nullish(),
    nature: RelatedNatureModel.nullish(),
    item: RelatedItemModel.nullish(),
  })
);
