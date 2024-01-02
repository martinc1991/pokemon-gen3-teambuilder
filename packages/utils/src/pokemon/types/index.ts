import { IvFieldName, TypeNames } from 'contract';
import { SORTED_TYPES_NAMES } from 'pokemon-info';

/**
 * Returns the name of the hidden power type of a pokemon based on IVs.
 *
 * @param IVs - object representing IVs
 *
 */
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
