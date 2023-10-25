import { IsValidAbilityName } from '@common/validations/abilityName.validator';
import { NationalPokedexNumberValidator } from '@common/validations/nationalPokedexNumber.validator';
import { Gender, NatureNames } from '@prisma/client';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString, Max, Min, Validate } from 'class-validator';

export class TeamSlotDto {
  @IsInt()
  @Validate(NationalPokedexNumberValidator)
  nationalPokedexNumber: number;

  @IsString()
  name: string;

  @IsValidAbilityName()
  abilityName: string;

  @IsEnum(NatureNames)
  natureName: NatureNames;

  @IsInt()
  @Max(255)
  @Min(0)
  evHp: number;
  @IsInt()
  @Max(255)
  @Min(0)
  evAttack: number;
  @IsInt()
  @Max(255)
  @Min(0)
  evDefense: number;
  @IsInt()
  @Max(255)
  @Min(0)
  evSpAttack: number;
  @IsInt()
  @Max(255)
  @Min(0)
  evSpDefense: number;
  @IsInt()
  @Max(255)
  @Min(0)
  evSpeed: number;

  @IsOptional()
  @IsString()
  itemName?: string;

  @IsBoolean()
  shiny: boolean;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  moveOneName: string;
  @IsOptional()
  @IsString()
  moveTwoName?: string;
  @IsOptional()
  @IsString()
  moveThreeName?: string;
  @IsOptional()
  @IsString()
  moveFourName?: string;
}
