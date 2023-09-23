import type { FilledSlot } from '../../../state/helpers/helpers';
import { formatPokemonName } from '../../../utils/pokemon';

export function getCardTitleName({ pokemon, name, order }: FilledSlot): string {
  if (name && name.trim().length > 0) {
    return `${order + 1}. ${name} (${formatPokemonName(pokemon.name)})`;
  }
  return `${order + 1}. ${formatPokemonName(pokemon.name)}`;
}
