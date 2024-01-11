import type { JSONSlot, StatID } from 'contract';
import { calculateHiddenPowerType, capitalize, formatString, getShortStatName } from 'utils';

export function parseTeam(team: JSONSlot[]): string {
  let output = '';
  for (const set of team) {
    output += `${parseSlot(set)}\n`;
  }
  return output;
}

function parseSlot(slot: JSONSlot): string {
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
  const statKeys: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
  if (slot.evs.hp || slot.evs.atk || slot.evs.def || slot.evs.spa || slot.evs.spd || slot.evs.spe) {
    const stats = statKeys.map((stat) => (slot.evs[stat] ? `${slot.evs[stat]} ${getShortStatName(stat)}` : ``)).filter(Boolean);

    if (stats.length) {
      out += `EVs: ${stats.join(' / ')}  \n`;
    }
  }

  // if (slot.natureName) {
  out += `${capitalize(slot.natureName)} Nature  \n`;
  // }

  // ivs
  if (slot.ivs.hp || slot.ivs.atk || slot.ivs.def || slot.ivs.spa || slot.ivs.spd || slot.ivs.spe) {
    const stats = statKeys
      .map((stat) => (slot.ivs[stat] !== 31 && slot.ivs[stat] !== undefined ? `${slot.ivs[stat] || 0} ${getShortStatName(stat)}` : ``))
      .filter(Boolean);

    if (stats.length) {
      out += `IVs: ${stats.join(' / ')}  \n`;
    }
  }

  // moves
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
