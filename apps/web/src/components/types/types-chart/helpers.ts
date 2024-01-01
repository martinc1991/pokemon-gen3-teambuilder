import { combineAndRemoveDuplicates, findDuplicateStrings } from '@utils/common';
import { Type, TypeNames } from 'contract';
import { capitalize } from 'utils';

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

interface TypeCombinationDefensiveDamageInfo {
  cuadrupleDamageFrom: TypeNames[];
  doubleDamageFrom: TypeNames[];
  halfDamageFrom: TypeNames[];
  quarterDamageFrom: TypeNames[];
  noDamageFrom: TypeNames[];
}

export function getTypeCombinationDefensiveDamageInfo(typeOne: Type, typeTwo?: Type): TypeCombinationDefensiveDamageInfo {
  const damageInfo: TypeCombinationDefensiveDamageInfo = {
    cuadrupleDamageFrom: [],
    doubleDamageFrom: [],
    halfDamageFrom: [],
    quarterDamageFrom: [],
    noDamageFrom: [],
  };

  if (!typeTwo) {
    damageInfo.doubleDamageFrom = typeOne.doubleDamageFrom;
    damageInfo.halfDamageFrom = typeOne.halfDamageFrom;
    damageInfo.noDamageFrom = typeOne.noDamageFrom;

    return damageInfo;
  }

  const double = combineAndRemoveDuplicates(typeOne.doubleDamageFrom, typeTwo.doubleDamageFrom);
  const half = combineAndRemoveDuplicates(typeOne.halfDamageFrom, typeTwo.halfDamageFrom);
  const zero = combineAndRemoveDuplicates(typeOne.noDamageFrom, typeTwo.noDamageFrom);

  damageInfo.noDamageFrom = zero;
  damageInfo.cuadrupleDamageFrom = findDuplicateStrings(typeOne.doubleDamageFrom, typeTwo.doubleDamageFrom); // If a type is present in both doubleDamageFrom arrays
  damageInfo.quarterDamageFrom = findDuplicateStrings(typeOne.halfDamageFrom, typeTwo.halfDamageFrom); // If a type is present in both doubleDamageFrom arrays

  // doubleDamageFrom
  double.forEach((type) => {
    if (!half.includes(type) && !zero.includes(type) && !damageInfo.cuadrupleDamageFrom.includes(type)) {
      damageInfo.doubleDamageFrom.push(type);
    }
  });

  // halfDamageFrom
  half.forEach((type) => {
    if (!double.includes(type) && !zero.includes(type) && !damageInfo.quarterDamageFrom.includes(type)) {
      damageInfo.halfDamageFrom.push(type);
    }
  });

  return damageInfo;
}
