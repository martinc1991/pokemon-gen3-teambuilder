import { TypeNames } from 'contract';
import { OrderBy, PokemonPaginationDto, SortOrder } from '../../dto';

export function pokemonPaginationStub(typeOne?: TypeNames, typeTwo?: TypeNames): PokemonPaginationDto {
  return {
    skip: 0,
    take: 10,
    orderBy: OrderBy.NPN,
    sortOrder: SortOrder.ASC,
    typeOne: typeOne ?? undefined,
    typeTwo: typeTwo ?? undefined,
  };
}
