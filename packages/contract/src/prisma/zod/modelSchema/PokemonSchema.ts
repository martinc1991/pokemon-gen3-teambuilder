import { z } from 'zod';
import { GenderSchema } from '../inputTypeSchemas/GenderSchema';
import { TierSchema } from '../inputTypeSchemas/TierSchema';
import { TypeNamesSchema } from '../inputTypeSchemas/TypeNamesSchema';

/////////////////////////////////////////
// POKEMON SCHEMA
/////////////////////////////////////////

export const PokemonSchema = z.object({
  typeOneName: TypeNamesSchema,
  typeTwoName: TypeNamesSchema,
  genders: GenderSchema.array(),
  tier: TierSchema,
  id: z.string().uuid(),
  name: z.string(),
  nationalPokedexNumber: z.number().int(),
  sprite: z.string(),
  icon: z.string(),
  height: z.number().int(),
  weight: z.number().int(),
  baseHp: z.number().int(),
  baseAttack: z.number().int(),
  baseDefense: z.number().int(),
  baseSpattack: z.number().int(),
  baseSpdefense: z.number().int(),
  baseSpeed: z.number().int(),
});

export type Pokemon = z.infer<typeof PokemonSchema>;

export default PokemonSchema;
