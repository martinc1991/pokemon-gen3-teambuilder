import { z } from 'zod';
import { GenderSchema } from '../inputTypeSchemas/GenderSchema';
import { NatureNamesSchema } from '../inputTypeSchemas/NatureNamesSchema';

/////////////////////////////////////////
// SLOT SCHEMA
/////////////////////////////////////////

export const SlotSchema = z.object({
  natureName: NatureNamesSchema,
  gender: GenderSchema,
  id: z.string().uuid(),
  name: z.string(),
  teamId: z.string(),
  nationalPokedexNumber: z.number().int(),
  order: z.number().int(),
  abilityName: z.string(),
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
  itemName: z.string().nullable(),
  shiny: z.boolean(),
  level: z.number().int(),
  happiness: z.number().int(),
  moveOneName: z.string(),
  moveTwoName: z.string().nullable(),
  moveThreeName: z.string().nullable(),
  moveFourName: z.string().nullable(),
});

export type Slot = z.infer<typeof SlotSchema>;

export default SlotSchema;
