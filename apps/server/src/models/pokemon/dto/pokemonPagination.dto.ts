import { BasicPaginationDto } from '@common/dto/basicPagination.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum OrderBy {
  NPN = 'nationalPokedexNumber',
  NAME = 'name',
}
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class PokemonPaginationDto extends BasicPaginationDto {
  @IsString()
  @IsOptional()
  @IsEnum(OrderBy)
  orderBy = OrderBy.NPN;

  @IsString()
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder = SortOrder.ASC;
}
