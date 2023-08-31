import { OrderBy, PokemonPaginationDto, SortOrder } from '../../dto';

export function pokemonPaginationStub(): PokemonPaginationDto {
  return {
    skip: 0,
    take: 10,
    orderBy: OrderBy.NPN,
    sortOrder: SortOrder.ASC,
  };
}
