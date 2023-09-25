import { NationalPokedexNumberValidator } from '@common/validations/nationalPokedexNumber.validator';
import { Gender, NatureNames } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  Validate,
} from 'class-validator';

export class TeamSlotDto {
  // This should be the only required field for the slot
  @Validate(NationalPokedexNumberValidator)
  nationalPokedexNumber: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  abilityName?: string;

  @IsOptional()
  @IsEnum(NatureNames)
  natureName?: NatureNames;

  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evHp?: number;
  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evAttack?: number;
  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evDefense?: number;
  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evSpAttack?: number;
  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evSpDefense?: number;
  @IsOptional()
  @IsInt()
  @Max(255)
  @Min(0)
  evSpeed?: number;

  @IsOptional()
  @IsString()
  itemName?: string;

  @IsOptional()
  @IsBoolean()
  shiny?: boolean;

  @IsEnum(Gender)
  gender: Gender;
}
