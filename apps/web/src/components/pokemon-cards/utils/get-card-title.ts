import type { FilledSlot } from '../../../state/team/helpers';
import { formatPokemonName } from '../../../utils/pokemon';

export function getCardTitleName({ pokemon, name, order }: FilledSlot): string {
  if (name) {
    return `${name} (${order + 1}. ${formatPokemonName(pokemon.name)})`;
  }
  return `${order + 1}. ${formatPokemonName(pokemon.name)}`;
}
