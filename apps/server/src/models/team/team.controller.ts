import { BasicPaginationDto } from '@common/dto/basicPagination.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTeamDto, EditTeamDto } from './dto';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}
  @Get()
  getAll(@Query() pagination: BasicPaginationDto) {
    return this.teamService.getAll(pagination);
  }

  @Get(':id')
  getOne(@Param('id') teamId: string) {
    return this.teamService.getOneById(teamId);
  }

  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.create(dto);
  }

  @Delete()
  delete(@Body('id') id: string) {
    return this.teamService.delete(id);
  }

  @Patch()
  edit(@Body() dto: EditTeamDto) {
    return this.teamService.edit(dto);
  }
}
