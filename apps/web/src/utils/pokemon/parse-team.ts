import type { FilledSlot, StatName } from 'contract';
import { capitalize, formatString } from '../common';
import { calculateHiddenPowerType, getShortStatName } from './stats';

export function parseTeam(team: FilledSlot[]): string {
  let output = '';
  for (const set of team) {
    output += `${parseSlot(set)}\n`;
  }
  return output;
}

function parseSlot(slot: FilledSlot): string {
  let out = ``;

  // Name
  if (slot.name) {
    out += `${slot.name} (${formatString(slot.pokemon.name)})`;
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
  if (slot.evHp || slot.evAttack || slot.evDefense || slot.evSpAttack || slot.evSpDefense || slot.evSpeed) {
    const evs: Record<StatName, number> = {
      hp: slot.evHp,
      attack: slot.evAttack,
      defense: slot.evDefense,
      spattack: slot.evSpAttack,
      spdefense: slot.evSpDefense,
      speed: slot.evSpeed,
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
  if (slot.ivHp || slot.ivAttack || slot.ivDefense || slot.ivSpAttack || slot.ivSpDefense || slot.ivSpeed) {
    const ivs: Record<StatName, number> = {
      hp: slot.ivHp,
      attack: slot.ivAttack,
      defense: slot.ivDefense,
      spattack: slot.ivSpAttack,
      spdefense: slot.ivSpDefense,
      speed: slot.ivSpeed,
    };

    const stats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']
      .map((stat) => (ivs[stat] !== 31 && ivs[stat] !== undefined ? `${ivs[stat] || 0} ${getShortStatName(stat as StatName)}` : ``))
      .filter(Boolean);

    if (stats.length) {
      out += `IVs: ${stats.join(' / ')}  \n`;
    }
  }

  // moves
  const moves = [slot.moveOneName, slot.moveTwoName, slot.moveThreeName, slot.moveFourName];

  for (let move of moves) {
    if (move) {
      if (move.toLowerCase().includes(`hidden`) && move.toLowerCase().includes(`power`) && move.charAt(13) !== '[') {
        move = `Hidden Power [${formatString(calculateHiddenPowerType(slot))}]`;
      }
      out += `- ${formatString(move)}  \n`;
    }
  }

  return out;
}
