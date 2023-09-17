import { IStats } from 'contract';

export function getShortStatName(statName: keyof IStats): string {
  switch (statName) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Atk';
    case 'defense':
      return 'Def';
    case 'spattack':
      return 'SpA';
    case 'spdefense':
      return 'SpD';
    case 'speed':
      return 'Spe';
    default:
      return '-';
  }
}

export function getTotalBaseStat(stats: IStats): number {
  let bst = 0;
  for (const stat in stats) {
    bst = bst + stats[stat];
  }
  return bst;
}
