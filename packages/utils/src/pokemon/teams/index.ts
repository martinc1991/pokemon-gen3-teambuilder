import {
  DEFAULT_EVS,
  DEFAULT_IVS,
  ExportSlot,
  ExportTeam,
  JSONTeam,
  PackedSlots,
  type CompleteSlot,
  type JSONSlot,
  type PackedTeam,
  type StatName,
} from 'contract';
import { calculateHiddenPowerType, getShortStatName } from '..';
import { PartialBy } from '../..';
import { capitalize, formatString } from '../../common';

/**
 * Transforms a team **from JSON to export** format.
 */
export function exportTeam(team: CompleteSlot[]): ExportSlot {
  // TODO: add security guard clauses
  let output = '';
  for (const set of team) {
    output += `${exportSlot(set)}\n`;
  }
  return output;
}

/**
 * Transforms a slot **from JSON to export** format.
 */
function exportSlot(slot: CompleteSlot): ExportTeam {
  // TODO: add security guard clauses

  let out = ``;

  // Name
  if (slot.nickname) {
    out += `${slot.nickname} (${formatString(slot.pokemon.name)})`;
  } else {
    out += formatString(slot.pokemon.name);
  }

  // Gender
  if (slot.gender === 'male') out += ` (M)`;
  if (slot.gender === 'female') out += ` (F)`;

  // Item
  if (slot.itemName) {
    out += ` @ ${formatString(slot.itemName)}`;
  }
  out += `  \n`;

  if (slot.abilityName) {
    out += `Ability: ${formatString(slot.abilityName)}  \n`;
  }

  // Level
  if (slot.level !== 100) {
    out += `Level: ${slot.level}  \n`;
  }

  // Shiny
  if (slot.shiny) {
    out += `Shiny: Yes  \n`;
  }

  // Happiness
  if (slot.happiness !== 255) {
    out += `Happiness: ${slot.happiness}  \n`;
  }

  // TODO: is this neccesary?
  // if (slot.hpType) {
  //   out += `Hidden Power: ${calculateHiddenPowerType(slot)}  \n`;
  // }

  // evs
  if (slot.evs.hp || slot.evs.atk || slot.evs.def || slot.evs.spa || slot.evs.spd || slot.evs.spe) {
    const evs: Record<StatName, number> = {
      hp: slot.evs.hp,
      attack: slot.evs.atk,
      defense: slot.evs.def,
      spattack: slot.evs.spa,
      spdefense: slot.evs.spd,
      speed: slot.evs.spe,
    };

    const stats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']
      .map((stat) => (evs[stat] ? `${evs[stat]} ${getShortStatName(stat as StatName)}` : ``))
      .filter(Boolean);

    if (stats.length) {
      out += `EVs: ${stats.join(' / ')}  \n`;
    }
  }

  // if (slot.natureName) {
  out += `${capitalize(slot.natureName)} Nature  \n`;
  // }

  // ivs
  if (slot.ivs.hp || slot.ivs.atk || slot.ivs.def || slot.ivs.spa || slot.ivs.spd || slot.ivs.spe) {
    const ivs: Record<StatName, number> = {
      hp: slot.ivs.hp,
      attack: slot.ivs.atk,
      defense: slot.ivs.def,
      spattack: slot.ivs.spa,
      spdefense: slot.ivs.spd,
      speed: slot.ivs.spe,
    };

    const stats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']
      .map((stat) => (ivs[stat] !== 31 && ivs[stat] !== undefined ? `${ivs[stat] || 0} ${getShortStatName(stat as StatName)}` : ``))
      .filter(Boolean);

    if (stats.length) {
      out += `IVs: ${stats.join(' / ')}  \n`;
    }
  }

  for (let move of slot.moves) {
    if (move) {
      if (move.toLowerCase().includes(`hidden`) && move.toLowerCase().includes(`power`) && move.charAt(13) !== '[') {
        move = `Hidden Power [${formatString(calculateHiddenPowerType(slot.ivs))}]`;
      }
      out += `- ${formatString(move)}  \n`;
    }
  }

  return out;
}

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

/**
 * @param pokemon Pokemon with abilities.
 * @returns A basic slot with minimal info about the pokemon.
 * @see {@link createSlot}
 */

export type CreateSlotParams = PartialBy<
  JSONSlot,
  'nickname' | 'itemName' | 'evs' | 'ivs' | 'level' | 'happiness' | 'moves' | 'natureName' | 'shiny'
>;

export function createSlot({
  nickname = '',
  evs = DEFAULT_EVS,
  ivs = DEFAULT_IVS,
  level = 100,
  happiness = 255,
  moves = [],
  natureName = 'serious',
  shiny = false,
  ...info
}: CreateSlotParams): JSONSlot {
  return {
    ...info,
    nickname,
    evs,
    ivs,
    level,
    happiness,
    moves,
    natureName,
    shiny,
    itemName: info.itemName || null,
  };
}
