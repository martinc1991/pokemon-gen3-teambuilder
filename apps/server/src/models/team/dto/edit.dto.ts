import { IsString } from 'class-validator';
import { CreateTeamDto } from './create.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditTeamDto extends PartialType(CreateTeamDto) {
  @IsString()
  id: string;
}
