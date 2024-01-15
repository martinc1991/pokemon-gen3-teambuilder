import { ExportTeam, MAX_HAPPINESS, MAX_INDIVIDUAL_IV, MAX_LEVEL, type JSONSlot } from 'contract';
import { capitalize, formatString } from '../../../common';
import { calculateHiddenPowerType } from '../../types';
import { getStatsText } from './stats';

/**
 * Transforms a slot **from JSON to export** format.
 */
export function exportSlot(slot: JSONSlot): ExportTeam {
  // TODO: add security guard clauses

  let out = ``;

  // Name
  if (slot.nickname) {
    out += `${slot.nickname} (${formatString(slot.species)})`;
  } else {
    out += formatString(slot.species);
  }

  // Gender
  if (slot.gender === 'male') out += ` (M)`;
  if (slot.gender === 'female') out += ` (F)`;

  // Item
  if (slot.itemName) {
    out += ` @ ${formatString(slot.itemName)}`;
  }
  out += `  \n`;

  // Ability
  if (slot.abilityName) {
    out += `Ability: ${formatString(slot.abilityName)}  \n`;
  }

  // Level
  if (slot.level !== MAX_LEVEL) {
    out += `Level: ${slot.level}  \n`;
  }

  // Shiny
  if (slot.shiny) {
    out += `Shiny: Yes  \n`;
  }

  // Happiness
  if (slot.happiness !== MAX_HAPPINESS) {
    out += `Happiness: ${slot.happiness}  \n`;
  }

  // evs
  if (slot.evs.hp || slot.evs.atk || slot.evs.def || slot.evs.spa || slot.evs.spd || slot.evs.spe) {
    out += getStatsText(slot.evs, 'ev');
  }

  out += `${capitalize(slot.natureName)} Nature  \n`;

  // ivs
  if (
    slot.ivs.hp !== MAX_INDIVIDUAL_IV ||
    slot.ivs.atk !== MAX_INDIVIDUAL_IV ||
    slot.ivs.def !== MAX_INDIVIDUAL_IV ||
    slot.ivs.spa !== MAX_INDIVIDUAL_IV ||
    slot.ivs.spd !== MAX_INDIVIDUAL_IV ||
    slot.ivs.spe !== MAX_INDIVIDUAL_IV
  ) {
    out += getStatsText(slot.ivs, 'iv');
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
