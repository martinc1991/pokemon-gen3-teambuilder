import { IBaseStats } from 'contract';

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
  let bst = 0;
  for (const stat in stats) {
    bst = bst + stats[stat];
  }
  return bst;
}
