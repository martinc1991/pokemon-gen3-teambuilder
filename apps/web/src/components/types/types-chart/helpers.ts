import { capitalize } from '@utils/common';
import { Type } from 'contract';

export function sortEmptyTypeFirst(typeA: Type, typeB: Type): number {
  if (typeA.name === 'empty') {
    return -1;
  } else if (typeB.name === 'empty') {
    return 1;
  } else {
    return 0;
  }
}

// TODO: move to pokemon-info?
type DamageMultiplierText = '0' | '2' | '1/2' | '';

export function getDamageMultiplier(ofensiveType: Type, defensiveType: Type): DamageMultiplierText {
  if (ofensiveType.noDamageTo.includes(defensiveType.name)) {
    return '0';
  } else if (ofensiveType.doubleDamageTo.includes(defensiveType.name)) {
    return '2';
  } else if (ofensiveType.halfDamageTo.includes(defensiveType.name)) {
    return '1/2';
  }
  return '';
}

export function getTooltipText(ofensiveType: Type, defensiveType: Type): string {
  const multiplier = getDamageMultiplier(ofensiveType, defensiveType);

  const offensive = capitalize(ofensiveType.name);
  const defensive = capitalize(defensiveType.name);

  switch (multiplier) {
    case '0':
      return `${offensive} makes no damage to ${defensive}`;
    case '2':
      return `${offensive} is super effective against ${defensive}`;
    case '1/2':
      return `${offensive} is not very effective against ${defensive}`;
    default:
      return '';
  }
}
