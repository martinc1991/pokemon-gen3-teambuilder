import { IsString } from 'class-validator';
import { CreateTeamDto } from './create.dto';

export class EditTeamDto extends CreateTeamDto {
  @IsString()
  id: string;
}
