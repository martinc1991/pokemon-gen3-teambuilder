import { Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsString, ValidateNested } from 'class-validator';
import { TeamSlotDto } from './teamSlot.dto';

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
  @Type(() => TeamSlotDto)
  slots: TeamSlotDto[];
}
