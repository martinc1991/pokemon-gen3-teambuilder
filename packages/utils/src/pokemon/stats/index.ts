import {
  IBaseStats,
  MAX_ATK,
  MAX_DEF,
  MAX_HP,
  MAX_SPA,
  MAX_SPD,
  MAX_SPE,
  MIN_ATK,
  MIN_DEF,
  MIN_HP,
  MIN_SPA,
  MIN_SPD,
  MIN_SPE,
  Nature,
  StatID,
  StatName,
  StatsTable,
} from 'contract';
import { getValues } from '../../common/object';

/**
 * Gets the formatted short name for any given stat or base stat.
 *
 * @example getShortStatName('baseHp'); // 'HP'
 *
 */
export function getShortStatName(statName: keyof IBaseStats | StatName | StatID): string {
  switch (statName) {
    case 'baseHp':
    case StatName.hp:
    case 'hp':
      return 'HP';
    case 'baseAttack':
    case StatName.attack:
    case 'atk':
      return 'Atk';
    case 'baseDefense':
    case StatName.defense:
    case 'def':
      return 'Def';
    case 'baseSpattack':
    case StatName.spattack:
    case 'spa':
      return 'SpA';
    case 'baseSpdefense':
    case StatName.spdefense:
    case 'spd':
      return 'SpD';
    case 'baseSpeed':
    case StatName.speed:
    case 'spe':
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
export function getTotalEvs({ hp, atk, def, spa, spd, spe }: StatsTable): number {
  return atk + def + hp + spa + spd + spe;
}

/**
 * Returns the max and min possible values for a given stat.
 */
export function getMinMaxStat(stat: StatID): { min: number; max: number } {
  switch (stat) {
    case 'hp':
      return { min: MIN_HP, max: MAX_HP };
    case 'atk':
      return { min: MIN_ATK, max: MAX_ATK };
    case 'def':
      return { min: MIN_DEF, max: MAX_DEF };
    case 'spa':
      return { min: MIN_SPA, max: MAX_SPA };
    case 'spd':
      return { min: MIN_SPD, max: MAX_SPD };
    case 'spe':
      return { min: MIN_SPE, max: MAX_SPE };
    default:
      return { min: 1, max: 1 };
  }
}

// TODO: these colors should not be here
// INFO: in sync with packages/tailwind-config/tokens/colors.ts
export const enum StatsColors {
  VERY_LOW = 'rgb(178,34,34)',
  LOW = 'rgb(255,140,0)',
  MID = 'rgb(255,255,0)',
  HIGH = 'rgb(50,205,50)',
  VERY_HIGH = 'rgb(0,250,154)',
}

/**
 * Returns the color for a given percentage in RGB format.
 * @param percentage - the percentage value to get the color for.
 * @see tailwind.config.ts
 */
export function getStatValueColor(percentage: number): StatsColors {
  const logvalue = Math.log10(percentage / 10) * 100;
  switch (true) {
    case logvalue >= 95:
      return StatsColors.VERY_HIGH;
    case logvalue >= 70:
      return StatsColors.HIGH;
    case logvalue >= 40:
      return StatsColors.MID;
    case logvalue >= 20:
      return StatsColors.LOW;
    default:
      return StatsColors.VERY_LOW;
  }
}
