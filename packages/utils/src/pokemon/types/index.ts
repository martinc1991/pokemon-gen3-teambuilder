import { StatsTable, TypeNames } from 'contract';
import { SORTED_TYPES_NAMES } from 'pokemon-info';

/**
 * Returns the name of the hidden power type of a pokemon based on IVs.
 *
 * @param IVs - object representing IVs
 *
 */
export function calculateHiddenPowerType({ hp, atk, def, spa, spd, spe }: StatsTable): TypeNames {
  const HP_NUM = hp % 2;
  const ATTACK_NUM = atk % 2;
  const DEFENSE_NUM = def % 2;
  const SPEED_NUM = spe % 2;
  const SPATTACK_NUM = spa % 2;
  const SPDEFENSE_NUM = spd % 2;

  const num = Math.floor(((HP_NUM + 2 * ATTACK_NUM + 4 * DEFENSE_NUM + 8 * SPEED_NUM + 16 * SPATTACK_NUM + 32 * SPDEFENSE_NUM) * 15) / 63);

  return SORTED_TYPES_NAMES[num];
}
