import * as z from "zod"
import * as imports from "../null"
import { NatureNames, StatName, StatName } from "@prisma/client"
import { CompleteSlot, RelatedSlotModel } from "./index"

export const NatureModel = z.object({
  id: z.string(),
  name: z.nativeEnum(NatureNames),
  increased: z.nativeEnum(StatName).nullish(),
  decreased: z.nativeEnum(StatName).nullish(),
})

export interface CompleteNature extends z.infer<typeof NatureModel> {
  Slot: CompleteSlot[]
}

/**
 * RelatedNatureModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedNatureModel: z.ZodSchema<CompleteNature> = z.lazy(() => NatureModel.extend({
  Slot: RelatedSlotModel.array(),
}))
