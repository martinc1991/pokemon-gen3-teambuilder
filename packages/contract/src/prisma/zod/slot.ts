import * as z from "zod"
import * as imports from "../null"
import { NatureNames, Gender } from "@prisma/client"
import { CompleteTeam, RelatedTeamModel, CompletePokemon, RelatedPokemonModel, CompleteAbility, RelatedAbilityModel, CompleteNature, RelatedNatureModel, CompleteItem, RelatedItemModel, CompleteMove, RelatedMoveModel } from "./index"

export const SlotModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  teamId: z.string(),
  nationalPokedexNumber: z.number().int(),
  order: z.number().int(),
  abilityName: z.string(),
  natureName: z.nativeEnum(NatureNames),
  evHp: z.number().int(),
  evAttack: z.number().int(),
  evDefense: z.number().int(),
  evSpAttack: z.number().int(),
  evSpDefense: z.number().int(),
  evSpeed: z.number().int(),
  ivHp: z.number().int(),
  ivAttack: z.number().int(),
  ivDefense: z.number().int(),
  ivSpAttack: z.number().int(),
  ivSpDefense: z.number().int(),
  ivSpeed: z.number().int(),
  itemName: z.string().nullish(),
  shiny: z.boolean(),
  gender: z.nativeEnum(Gender),
  level: z.number().int(),
  happiness: z.number().int(),
  moveOneName: z.string(),
  moveTwoName: z.string().nullish(),
  moveThreeName: z.string().nullish(),
  moveFourName: z.string().nullish(),
})

export interface CompleteSlot extends z.infer<typeof SlotModel> {
  team: CompleteTeam
  pokemon: CompletePokemon
  ability: CompleteAbility
  nature: CompleteNature
  item?: CompleteItem | null
  moveOne: CompleteMove
  moveTwo?: CompleteMove | null
  moveThree?: CompleteMove | null
  moveFour?: CompleteMove | null
}

/**
 * RelatedSlotModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSlotModel: z.ZodSchema<CompleteSlot> = z.lazy(() => SlotModel.extend({
  team: RelatedTeamModel,
  pokemon: RelatedPokemonModel,
  ability: RelatedAbilityModel,
  nature: RelatedNatureModel,
  item: RelatedItemModel.nullish(),
  moveOne: RelatedMoveModel,
  moveTwo: RelatedMoveModel.nullish(),
  moveThree: RelatedMoveModel.nullish(),
  moveFour: RelatedMoveModel.nullish(),
}))
