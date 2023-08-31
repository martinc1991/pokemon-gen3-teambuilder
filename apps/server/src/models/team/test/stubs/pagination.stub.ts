import { BasicPaginationDto } from '@common/dto/basicPagination.dto';

export function paginationStub(): BasicPaginationDto {
  return {
    skip: 0,
    take: 10,
  };
}
