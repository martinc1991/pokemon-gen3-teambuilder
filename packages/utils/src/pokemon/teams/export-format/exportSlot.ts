import { ExportTeam, MAX_HAPPINESS, type JSONSlot, type StatName, MAX_LEVEL, MAX_INDIVIDUAL_IV, StatID, StatsTable } from 'contract';
import { capitalize, formatString } from '../../../common';
import { getShortStatName } from '../../stats';
import { calculateHiddenPowerType } from '../../types';

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

  // TODO: is this neccesary?
  // if (slot.hpType) {
  //   out += `Hidden Power: ${calculateHiddenPowerType(slot)}  \n`;
  // }

  // evs
  if (slot.evs.hp || slot.evs.atk || slot.evs.def || slot.evs.spa || slot.evs.spd || slot.evs.spe) {
    const statNameArray: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

    const stats = statNameArray.map((stat) => (slot.evs[stat] ? `${slot.evs[stat]} ${getShortStatName(stat)}` : ``)).filter(Boolean);

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
      .map((stat) =>
        ivs[stat] !== MAX_INDIVIDUAL_IV && ivs[stat] !== undefined ? `${ivs[stat] || 0} ${getShortStatName(stat as StatName)}` : ``,
      )
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
