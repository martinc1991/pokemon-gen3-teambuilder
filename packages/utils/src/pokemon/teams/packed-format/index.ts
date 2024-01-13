import { JSONTeam, PackedSlots, type JSONSlot, type PackedTeam } from 'contract';

/**
 * Transforms a slot or many slots **from JSON to packed** format.
 *
 * JSON stringifies slots to store in DB.
 */
export function packSlots(team: JSONSlot[]): PackedSlots {
  return JSON.stringify(team);
}

/**
 * Transforms a slot **from packed to JSON** format.
 *
 * Parses a JSON stringified team from DB.
 */
export function unpackSlots(team: PackedSlots): JSONSlot[] {
  return JSON.parse(team);
}

/**
 * Transforms a team **from JSON to packed** format.
 */
export function packTeam(team: JSONTeam): PackedTeam {
  return { ...team, slots: packSlots(team.slots) };
}

/**
 * Transforms a team **from packed to JSON** format.
 */
export function unpackTeam(team: PackedTeam): JSONTeam {
  return { ...team, slots: unpackSlots(team.slots) };
}
