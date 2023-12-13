import { BasicPaginationDto } from '@common/dto/basicPagination.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTeamDto, EditTeamDto } from './dto';
import { TeamService } from './team.service';
import { NestControllerInterface, TsRest, nestControllerContract } from '@ts-rest/nest';
import { ITeamsContract, teamsContract } from 'contract';

const c: ITeamsContract = nestControllerContract(teamsContract);

@Controller('')
export class TeamController implements NestControllerInterface<typeof c> {
  constructor(private teamService: TeamService) {}

  @TsRest(c.getAll)
  @Get()
  async getAll(@Query() pagination: BasicPaginationDto) {
    const teams = await this.teamService.getAll(pagination);
    return { status: 200 as const, body: teams };
  }

  @TsRest(c.getSampleTeams)
  @Get('sample')
  async getSampleTeams(@Query() pagination: BasicPaginationDto) {
    const teams = await this.teamService.getSampleTeams(pagination);
    return { status: 200 as const, body: teams };
  }

  @TsRest(c.getOne)
  @Get(':teamId')
  async getOne(@Param('teamId') teamId: string) {
    const team = await this.teamService.getOneById(teamId);
    return { status: 200 as const, body: team };
  }

  @TsRest(c.create)
  @Post()
  async create(@Body() dto: CreateTeamDto) {
    const createdTeam = await this.teamService.create(dto);
    return { status: 201 as const, body: createdTeam };
  }

  @TsRest(c.delete)
  @Delete()
  async delete(@Body('id') id: string) {
    const deletedTeam = await this.teamService.delete(id);
    return { status: 200 as const, body: deletedTeam };
  }

  @TsRest(c.edit)
  @Patch()
  async edit(@Body() dto: EditTeamDto) {
    const editedTeam = await this.teamService.edit(dto);
    return { status: 200 as const, body: editedTeam };
  }
}
