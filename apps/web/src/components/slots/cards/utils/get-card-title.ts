import { FilledSlot } from 'contract';
import { formatPokemonName } from 'utils';

export function getCardTitleName({ pokemon, name, order }: Pick<FilledSlot, 'pokemon' | 'name' | 'order'>): string {
  if (name && name.trim().length > 0) {
    return `${order + 1}. ${name} (${formatPokemonName(pokemon.name)})`;
  }
  return `${order + 1}. ${formatPokemonName(pokemon.name)}`;
}
