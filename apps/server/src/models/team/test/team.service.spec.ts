import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '@providers/prisma/prisma.service';
import { Team } from 'contract';
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
  public: true,
  sample: true,
};

const mockedPrismaService = {
  team: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn().mockResolvedValue(mockedTeam),
    delete: jest.fn(),
    update: jest.fn(),
  },
  slot: {
    createMany: jest.fn(),
    deleteMany: jest.fn(),
  },
  $transaction: jest.fn().mockImplementation((callback) => callback(mockedPrismaService)),
};

describe('Team controller', () => {
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
    it('should call prisma team service findMany method with the correct configuration passing pagination params', async () => {
      const expectedParams = {
        include: {
          slots: {
            select: {
              name: true,
              order: true,
              pokemon: { select: { name: true } },
            },
          },
        },
        skip: paginationStub().skip,
        take: paginationStub().take,
      };
      await service.getAll(paginationStub());
      expect(prismaService.team.findMany).toHaveBeenCalledWith(expectedParams);
    });
  });

  describe('getOneById method', () => {
    it('should call prisma team service getOneById method passing teamId param', async () => {
      const expectedParams = {
        where: { id: teamIdStub },
        include: {
          slots: {
            include: {
              pokemon: true,
            },
          },
        },
      };

      jest.spyOn(prismaService.team, 'findUnique').mockResolvedValueOnce(mockedTeam);

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
          slots: {},
          description: dto.description,
          userName: dto.userName,
        },
        select: {
          id: true,
          name: true,
        },
      };

      await service.create(dto);

      expect(prismaService.team.create).toBeCalledWith(expectedCreateParams);
    });

    it('if slots are provided, should call prisma slot service createMany method passing slots dto', async () => {
      const dto = createTeamDtoStub(2);
      const expectedCreateManyParams = {
        data: dto.slots.map((slot, i) => ({
          ...slot,
          teamId: teamIdStub,
          order: i,
        })),
      };

      await service.create(dto);

      expect(prismaService.slot.createMany).toBeCalledWith(expectedCreateManyParams);
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
    it('if slots are provided, should delete existing slots and create new ones', async () => {
      const dto = editTeamDtoStub(2);
      const expectedDeleteManyParams = {
        where: { teamId: dto.id },
      };
      const expectedCreateManyParams = {
        data: dto.slots.map((slot, i) => ({
          ...slot,
          teamId: dto.id,
          order: i,
        })),
      };

      await service.edit(dto);

      expect(prismaService.slot.deleteMany).toBeCalledWith(expectedDeleteManyParams);
      expect(prismaService.slot.createMany).toBeCalledWith(expectedCreateManyParams);
    });

    it("if slots is an empty array, should delete existing slots but shouldn't create new ones", async () => {
      const dto = editTeamDtoStub(0);
      const expectedDeleteManyParams = {
        where: { teamId: dto.id },
      };

      await service.edit(dto);

      expect(prismaService.slot.deleteMany).toBeCalledWith(expectedDeleteManyParams);
      expect(prismaService.slot.createMany).not.toBeCalled();
    });

    it("if slots are not provided, shouldn't delete existing slots or create new ones", async () => {
      const dto = editTeamDtoStub(0, true);

      await service.edit(dto);

      expect(prismaService.slot.deleteMany).not.toBeCalled();
      expect(prismaService.slot.createMany).not.toBeCalled();
    });

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
