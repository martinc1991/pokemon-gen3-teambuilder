import { MAX_INDIVIDUAL_IV, StatID, StatsTable } from 'contract';
import { getShortStatName } from '../../stats';

const statNameArray: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

export function getStatsText(stats: StatsTable, type: 'ev' | 'iv'): string {
  let out = ``;
  const tag = type === 'ev' ? 'EVs:' : 'IVs:';
  const defaultValue = type === 'ev' ? 0 : MAX_INDIVIDUAL_IV;

  const s = statNameArray
    .map((stat) => (stats[stat] && stats[stat] !== defaultValue ? `${stats[stat]} ${getShortStatName(stat)}` : ``))
    .filter(Boolean);

  if (s.length) {
    out += `${tag} ${s.join(' / ')}  \n`;
  }

  return out;
}
