import { LocalSlot } from 'contract';
import { formatPokemonName } from 'utils';

/**
 * @param order - zero based
 */
export function getCardTitleName(
  { species, nickname }: Pick<LocalSlot, 'species' | 'nickname'>,
  order: number,
  hideNumber = false,
): string {
  const num = order + 1;
  let out = ``;

  if (!hideNumber) out += `${num}. `;

  if (nickname && nickname.trim().length > 0) {
    out += `${nickname} (${formatPokemonName(species)})`;
  } else {
    out += `${formatPokemonName(species)}`;
  }

  return out;
}
