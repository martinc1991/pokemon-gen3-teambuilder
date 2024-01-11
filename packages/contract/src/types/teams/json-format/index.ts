import z from 'zod';
import { LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS } from '../../../constants';
import { GenderSchema, NatureNamesSchema, TeamSchema } from '../../../prisma/zod';
import { StatsSchema } from '../../stats';

export const JSONSlotSchema = z.object({
  species: z.string(), // species name as id. ie: pikachu (aux for getting/storing on db)
  nationalPokedexNumber: z.number().int().max(LAST_POKEMON_DEX_NUMBER_WITH_DEOXYS).min(1),
  nickname: z.string(),
  itemName: z.string().nullable(), // Item name as id. ie: choice-band (aux for getting/storing on db)
  abilityName: z.string(), // Ability name as id. ie: synchronize (aux for getting/storing on db)
  natureName: NatureNamesSchema,
  gender: GenderSchema,
  evs: StatsSchema,
  ivs: StatsSchema,
  level: z.number().int(),
  shiny: z.boolean(),
  happiness: z.number().int(),
  moves: z.string().array(), // Move names as ids. ie: ice-beam (aux for getting/storing on db)
});

/**
 * A slot in a team in JSON format. Basically this is what server expects to create/edit teams.
 *
 * It also acts as a empty slot.
 */
export type JSONSlot = z.infer<typeof JSONSlotSchema>;

export const JSONTeamSchema = TeamSchema.merge(z.object({ slots: z.array(JSONSlotSchema) }));
export type JSONTeam = z.infer<typeof JSONTeamSchema>;
