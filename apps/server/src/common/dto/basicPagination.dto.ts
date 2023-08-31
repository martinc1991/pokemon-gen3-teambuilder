import { Transform } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class BasicPaginationDto {
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  take = 10;

  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  skip = 0;
}
