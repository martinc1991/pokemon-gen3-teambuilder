import type { CompleteNature, EvFieldName, IBaseStats, IvFieldName, StatName, TypeNames } from 'contract';
import { SORTED_TYPES_NAMES } from 'pokemon-info';
import { getValues } from '../common';

export function getShortStatName(statName: keyof IBaseStats | StatName): string {
  switch (statName) {
    case 'baseHp':
    case 'hp':
      return 'HP';
    case 'baseAttack':
    case 'attack':
      return 'Atk';
    case 'baseDefense':
    case 'defense':
      return 'Def';
    case 'baseSpattack':
    case 'spattack':
      return 'SpA';
    case 'baseSpdefense':
    case 'spdefense':
      return 'SpD';
    case 'speed':
      return 'Spe';
    default:
      return '-';
  }
}

export function getTotalBaseStat(stats: IBaseStats): number {
  return getValues(stats).reduce((a, b) => a + b, 0);
}

export interface CalculateStatProps {
  statName: StatName;
  base: number;
  ev: number;
  iv: number;
  level: number;
  nature: Pick<CompleteNature, 'increased' | 'decreased'>;
}

// See: https://pokemon.fandom.com/wiki/Statistics#Formula
export function calculateStat({ statName, base, ev, iv, level, nature }: CalculateStatProps): number {
  if (statName === 'hp') {
    return Math.floor(0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level) + level + 10;
  }

  let natureMultiplier = 1;

  if (statName === nature.decreased) {
    natureMultiplier = 0.9;
  } else if (statName === nature.increased) {
    natureMultiplier = 1.1;
  }

  return Math.floor((0.01 * (2 * base + iv + Math.floor(0.25 * ev)) * level + 5) * natureMultiplier);
}

export function getTotalEvs({
  evAttack,
  evDefense,
  evHp,
  evSpAttack,
  evSpDefense,
  evSpeed,
}: {
  [K in EvFieldName]: number;
}): number {
  return evAttack + evDefense + evHp + evSpAttack + evSpDefense + evSpeed;
}

export function calculateHiddenPowerType({
  ivHp,
  ivAttack,
  ivDefense,
  ivSpAttack,
  ivSpDefense,
  ivSpeed,
}: {
  [K in IvFieldName]: number;
}): TypeNames {
  const HP_NUM = ivHp % 2;
  const ATTACK_NUM = ivAttack % 2;
  const DEFENSE_NUM = ivDefense % 2;
  const SPEED_NUM = ivSpeed % 2;
  const SPATTACK_NUM = ivSpAttack % 2;
  const SPDEFENSE_NUM = ivSpDefense % 2;

  const num = Math.floor(((HP_NUM + 2 * ATTACK_NUM + 4 * DEFENSE_NUM + 8 * SPEED_NUM + 16 * SPATTACK_NUM + 32 * SPDEFENSE_NUM) * 15) / 63);

  return SORTED_TYPES_NAMES[num];
}
