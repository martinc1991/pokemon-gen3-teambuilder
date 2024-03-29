import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '@providers/prisma/prisma.service';
import { CompleteTeam, Team } from 'contract';
import { packSlots } from 'utils';
import { TeamService } from '../team.service';
import {
  createTeamDtoStub,
  editTeamDtoStub,
  teamDescriptionStub,
  teamIdStub,
  teamNameStub,
  teamUserNameStub,
} from './stubs/createTeamDto.stub';
import { paginationStub } from './stubs/pagination.stub';

const mockedTeam: Team = {
  name: teamNameStub,
  id: teamIdStub,
  description: teamDescriptionStub,
  userName: teamUserNameStub,
  isPublic: true,
  isSample: true,
  slots: '[]',
};
const mockedCompleteTeam: CompleteTeam = {
  ...mockedTeam,
  slots: [],
};

const mockedPrismaService = {
  team: {
    findMany: jest.fn().mockResolvedValue([]),
    findUnique: jest.fn(),
    create: jest.fn().mockResolvedValue(mockedTeam),
    delete: jest.fn(),
    update: jest.fn(),
  },
  $transaction: jest.fn().mockImplementation((callback) => callback(mockedPrismaService)),
};

describe('Team service', () => {
  let prismaService: PrismaService;
  let service: TeamService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TeamService, { provide: PrismaService, useValue: mockedPrismaService }],
    }).compile();

    service = moduleRef.get<TeamService>(TeamService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('getAll method', () => {
    it('should call prisma service team.findMany method with the correct configuration passing pagination params', async () => {
      const expectedParams = {
        skip: paginationStub().skip,
        take: paginationStub().take,
      };
      await service.getAll(paginationStub());
      expect(prismaService.team.findMany).toHaveBeenCalledWith(expectedParams);
    });
  });

  describe('getSampleTeams method', () => {
    it('should call prisma team service findMany method with the correct configuration passing pagination params', async () => {
      const expectedParams = {
        where: {
          isSample: true,
        },
        skip: paginationStub().skip,
        take: paginationStub().take,
      };
      await service.getSampleTeams(paginationStub());
      expect(prismaService.team.findMany).toHaveBeenCalledWith(expectedParams);
    });
  });

  describe('getOneById method', () => {
    it('should call prisma team service getOneById method passing teamId param', async () => {
      const expectedParams = {
        where: { id: teamIdStub },
      };

      jest.spyOn(prismaService.team, 'findUnique').mockResolvedValueOnce(mockedTeam);
      jest.spyOn(service, 'getCompleteTeamFromJson').mockResolvedValueOnce(mockedCompleteTeam);

      await service.getOneById(teamIdStub);
      expect(prismaService.team.findUnique).toBeCalledWith(expectedParams);
    });

    it('should throw a not found exception if no team is found', async () => {
      jest.spyOn(prismaService.team, 'findUnique').mockResolvedValueOnce(null);

      await expect(service.getOneById(teamIdStub)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create method', () => {
    it('should call prisma team service create method passing create team dto', async () => {
      const dto = createTeamDtoStub(2);
      const expectedCreateParams = {
        data: {
          name: dto.name,
          description: dto.description,
          userName: dto.userName,
          slots: packSlots(dto.slots),
          isPublic: dto.isPublic,
          isSample: dto.isSample,
        },
        select: {
          id: true,
          name: true,
        },
      };

      await service.create(dto);

      expect(prismaService.team.create).toBeCalledWith(expectedCreateParams);
    });
  });

  describe('delete method', () => {
    it('should call service delete method passing teamId param', async () => {
      const expectedParams = {
        where: {
          id: teamIdStub,
        },
      };
      await service.delete(teamIdStub);
      expect(prismaService.team.delete).toBeCalledWith(expectedParams);
    });
  });

  describe('edit method', () => {
    it('should call prisma team service update method passing edit team dto', async () => {
      const dto = editTeamDtoStub(2);
      const expectedUpdateParams = {
        where: {
          id: dto.id,
        },
        data: {
          name: dto.name ?? undefined,
        },
      };

      await service.edit(dto);

      expect(prismaService.team.update).toBeCalledWith(expectedUpdateParams);
    });
  });
});
