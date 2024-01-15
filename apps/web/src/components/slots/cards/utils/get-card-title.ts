import { LocalSlot } from 'contract';
import { formatPokemonName } from 'utils';

/**
 * @param order - zero based
 */
export function getCardTitleName({ species, nickname }: Pick<LocalSlot, 'species' | 'nickname'>, order: number): string {
  const num = order + 1;

  if (nickname && nickname.trim().length > 0) {
    return `${num + '. '}${nickname} (${formatPokemonName(species)})`;
  }
  return `${num + '. '}${formatPokemonName(species)}`;
}
