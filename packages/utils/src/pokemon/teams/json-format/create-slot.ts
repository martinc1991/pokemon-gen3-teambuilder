import { DEFAULT_EVS, DEFAULT_IVS, type JSONSlot } from 'contract';
import { PartialBy } from '../../../types';

/**
 * @param pokemon Pokemon with abilities.
 * @returns A basic slot with minimal info about the pokemon.
 * @see {@link createSlot}
 */

export type CreateSlotParams = PartialBy<
  JSONSlot,
  'nickname' | 'itemName' | 'evs' | 'ivs' | 'level' | 'happiness' | 'moves' | 'natureName' | 'shiny'
>;

export function createSlot({
  nickname = '',
  evs = DEFAULT_EVS,
  ivs = DEFAULT_IVS,
  level = 100,
  happiness = 255,
  moves = [],
  natureName = 'serious',
  shiny = false,
  ...info
}: CreateSlotParams): JSONSlot {
  return {
    ...info,
    nickname,
    evs,
    ivs,
    level,
    happiness,
    moves,
    natureName,
    shiny,
    itemName: info.itemName || null,
  };
}
