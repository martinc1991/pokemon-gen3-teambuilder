import { BasicPaginationDto } from '@common/dto/basicPagination.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateTeamDto, EditTeamDto } from './dto';
import { PrismaService } from '@providers/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  getAll(pagination: BasicPaginationDto) {
    return this.prisma.team.findMany({
      include: {
        slots: {
          select: {
            name: true,
            order: true,
            pokemon: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      skip: pagination.skip,
      take: pagination.take,
    });
  }

  async getOneById(teamId: string) {
    const team = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: {
        slots: {
          include: {
            pokemon: true,
          },
        },
      },
    });

    if (!team) throw new NotFoundException();

    return team;
  }

  async getSampleTeams(pagination: BasicPaginationDto) {
    return this.prisma.team.findMany({
      where: {
        isSample: true,
      },
      include: {
        slots: {
          include: {
            pokemon: {
              include: {
                abilities: true,
              },
            },
          },
        },
      },
      skip: pagination.skip,
      take: pagination.take,
    });
  }

  async create(dto: CreateTeamDto) {
    const newTeam = await this.prisma.team.create({
      data: {
        name: dto.name,
        description: dto.description,
        userName: dto.userName,
        slots: {},
      },
      select: {
        id: true,
        name: true,
      },
    });

    await this.prisma.slot.createMany({
      data: dto.slots.map((slot, i) => ({
        ...slot,
        teamId: newTeam.id,
        order: i,
      })),
    });

    return newTeam;
  }

  async delete(teamId: string) {
    return this.prisma.team.delete({
      where: {
        id: teamId,
      },
    });
  }

  async edit(dto: EditTeamDto) {
    return this.prisma.$transaction(async (prisma) => {
      const teamUpdateData: Prisma.TeamUpdateInput = {
        name: dto.name ?? undefined,
      };

      if (dto.slots) {
        // Delete all slots in this team
        await prisma.slot.deleteMany({
          where: { teamId: dto.id },
        });

        // Add new slots to this team
        if (dto.slots.length) {
          const slotCreateData = dto.slots.map((slot, i) => ({
            ...slot,
            teamId: dto.id,
            order: i,
          }));

          await prisma.slot.createMany({
            data: slotCreateData,
          });
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
}
