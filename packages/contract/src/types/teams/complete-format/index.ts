import z from 'zod';
import { PokemonWithAbilitiesSchema } from '../..';
import { TeamSchema } from '../../../prisma/zod';
import { JSONSlotSchema } from '../json-format';

// Complete
export const CompleteSlotSchema = JSONSlotSchema.merge(z.object({ pokemon: PokemonWithAbilitiesSchema }));

/**
 * A slot in a team in with a pokemon.
 *
 * Basically it's what the server responds when asked for a slot.
 */
export type CompleteSlot = z.infer<typeof CompleteSlotSchema>;

export const CompleteTeamSchema = TeamSchema.merge(z.object({ slots: z.array(CompleteSlotSchema) }));
export type CompleteTeam = z.infer<typeof CompleteTeamSchema>;

// Local
export const LocalSlotSchema = JSONSlotSchema.merge(z.object({ meta: z.object({ id: z.string() }) }));

/**
 * A slot in a team with a pokemon, with a `meta.id` property.
 *
 * Basically it's what the current team on the frontend uses.
 */
export type LocalSlot = z.infer<typeof LocalSlotSchema>;

export const LocalTeamSchema = TeamSchema.merge(z.object({ slots: z.array(LocalSlotSchema) }));
export type LocalTeam = z.infer<typeof LocalTeamSchema>;
