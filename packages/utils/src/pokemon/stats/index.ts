import { EvFieldName, IBaseStats, Nature, StatName } from 'contract';
import { getValues } from '../../common/object';

/**
 * Gets the formatted short name for any given stat or base stat.
 *
 * @example getShortStatName('baseHp'); // 'HP'
 *
 */
export function getShortStatName(statName: keyof IBaseStats | StatName): string {
  switch (statName) {
    case 'baseHp':
    case StatName.hp:
      return 'HP';
    case 'baseAttack':
    case StatName.attack:
      return 'Atk';
    case 'baseDefense':
    case StatName.defense:
      return 'Def';
    case 'baseSpattack':
    case StatName.spattack:
      return 'SpA';
    case 'baseSpdefense':
    case StatName.spdefense:
      return 'SpD';
    case 'baseSpeed':
    case StatName.speed:
      return 'Spe';
    default:
      return '-';
  }
}

/**
 * Returns the sum of the base stats of a pokemon.
 *
 * @param stats - object representing base stats
 *
 */
export function getTotalBaseStat(stats: IBaseStats): number {
  return getValues(stats).reduce((a, b) => a + b, 0);
}

export interface CalculateStatProps {
  statName: StatName;
  base: number;
  ev: number;
  iv: number;
  level: number;
  nature: Pick<Nature, 'increased' | 'decreased'>;
}

/**
 * Returns the total value of a stat for a pokemon based on which stat it is, base stat, ev, iv, level and nature.
 *
 * Check: {@link https://pokemon.fandom.com/wiki/Statistics#Formula | Formula}
 */
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

/**
 * Returns the sum of the base stats of a pokemon.
 *
 * @param EVs - object representing EVs
 *
 */
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
