import type { IBaseStats, StatName, CompleteNature } from 'contract';
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
