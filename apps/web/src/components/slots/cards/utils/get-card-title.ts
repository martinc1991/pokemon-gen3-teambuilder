import type { FilledSlot } from '../../../../state/team/helpers';
import { formatPokemonName } from '../../../../utils/pokemon';

export function getCardTitleName({ pokemon, name, order }: Pick<FilledSlot, 'pokemon' | 'name' | 'order'>): string {
  if (name && name.trim().length > 0) {
    return `${order + 1}. ${name} (${formatPokemonName(pokemon.name)})`;
  }
  return `${order + 1}. ${formatPokemonName(pokemon.name)}`;
}
