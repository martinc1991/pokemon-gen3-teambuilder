import { Team } from '../../../prisma/zod';

/**
 * JSON stringified slot
 * In the future it should be in packed format
 *
 * {@link https://github.com/smogon/pokemon-showdown/blob/master/sim/TEAMS.md#packed-format | Packed format}
 */
export type PackedSlot = string;
export type PackedSlots = string;

/**
 * Team with JSON stringified slots
 */
export type PackedTeam = Team;
