import type { IBaseStats } from 'contract';
import { getValues } from '../common';

export function getShortStatName(statName: keyof IBaseStats): string {
  switch (statName) {
    case 'baseHp':
      return 'HP';
    case 'baseAttack':
      return 'Atk';
    case 'baseDefense':
      return 'Def';
    case 'baseSpattack':
      return 'SpA';
    case 'baseSpdefense':
      return 'SpD';
    case 'baseSpeed':
      return 'Spe';
    default:
      return '-';
  }
}

export function getTotalBaseStat(stats: IBaseStats): number {
  return getValues(stats).reduce((a, b) => a + b, 0);
}
