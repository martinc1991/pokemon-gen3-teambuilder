import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsString, ValidateNested } from 'class-validator';
import { JSONSlot } from 'contract';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  userName: string;

  @IsArray()
  @ArrayMaxSize(6, { message: "a team can't have more than 6 pokemon" })
  @ArrayMinSize(1, { message: 'a team must have at least 1 pokemon' })
  @ValidateNested({ each: true })
  slots: JSONSlot[];

  @IsBoolean()
  isSample: boolean;

  @IsBoolean()
  isPublic: boolean;
}
