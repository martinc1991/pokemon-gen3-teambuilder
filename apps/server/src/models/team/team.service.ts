import { BasicPaginationDto } from '@common/dto/basicPagination.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@providers/prisma/prisma.service';
import { CompleteTeam, JSONTeam } from 'contract';
import { packSlots, unpackTeam } from 'utils';
import { CreateTeamDto, EditTeamDto } from './dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async getAll(pagination: BasicPaginationDto) {
    const teams = await this.prisma.team.findMany({
      skip: pagination.skip,
      take: pagination.take,
    });

    return teams.map(unpackTeam);
  }

  async getOneById(teamId: string) {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
    });

    if (!team) throw new NotFoundException();

    const jsonTeam = unpackTeam(team);

    const completeTeam = await this.getCompleteTeamFromJson(jsonTeam);

    return completeTeam;
  }

  async getSampleTeams(pagination: BasicPaginationDto) {
    const teams = await this.prisma.team.findMany({
      where: {
        isSample: true,
      },
      skip: pagination.skip,
      take: pagination.take,
    });

    return teams.map(unpackTeam);
  }

  // TODO:
  async create(dto: CreateTeamDto) {
    const newTeam = await this.prisma.team.create({
      data: {
        name: dto.name,
        description: dto.description,
        userName: dto.userName,
        slots: packSlots(dto.slots),
      },
      select: {
        id: true,
        name: true,
      },
    });

    return newTeam;
  }

  // TODO:
  async delete(teamId: string) {
    return this.prisma.team.delete({
      where: {
        id: teamId,
      },
    });
  }

  // TODO:
  async edit(dto: EditTeamDto) {
    return this.prisma.$transaction(async (prisma) => {
      const teamUpdateData: Prisma.TeamUpdateInput = {
        name: dto.name ?? undefined,
      };

      if (dto.slots) {
        // Delete all slots in this team

        // Add new slots to this team
        if (dto.slots.length) {
        }
      }

      return prisma.team.update({
        where: {
          id: dto.id,
        },
        data: teamUpdateData,
      });
    });
  }

  // aux
  async getCompleteTeamFromJson(team: JSONTeam): Promise<CompleteTeam> {
    const pokemon = await this.prisma.pokemon.findMany({
      where: {
        nationalPokedexNumber: {
          in: team.slots.map((slot) => slot.nationalPokedexNumber),
        },
      },
      include: {
        abilities: true,
      },
    });
    return {
      ...team,
      slots: team.slots.map((slot) => ({ ...slot, pokemon: pokemon.find((p) => p.nationalPokedexNumber === slot.nationalPokedexNumber) })),
    };
  }
}
