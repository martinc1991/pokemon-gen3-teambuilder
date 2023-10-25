import { Test } from '@nestjs/testing';
import { TeamController } from '../team.controller';
import { TeamService } from '../team.service';
import { createTeamDtoStub, editTeamDtoStub, teamIdStub } from './stubs/createTeamDto.stub';
import { paginationStub } from './stubs/pagination.stub';

const mockedTeamService = {
  getAll: jest.fn(),
  getOneById: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
  edit: jest.fn(),
};

describe('Team controller', () => {
  let controller: TeamController;
  let service: TeamService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TeamController],
      providers: [{ provide: TeamService, useValue: mockedTeamService }],
    }).compile();

    service = moduleRef.get<TeamService>(TeamService);
    controller = moduleRef.get<TeamController>(TeamController);
  });

  describe('getAll method', () => {
    it('should call service getAll method passing pagination params', async () => {
      await controller.getAll(paginationStub());
      expect(service.getAll).toHaveBeenCalledWith(paginationStub());
    });
  });

  describe('getOne method', () => {
    it('should call service getOneById method passing teamId param', async () => {
      await controller.getOne(teamIdStub);
      expect(service.getOneById).toHaveBeenCalledWith(teamIdStub);
    });
  });

  describe('create method', () => {
    it('should call service create method passing create team dto', async () => {
      await controller.create(createTeamDtoStub(2));
      expect(service.create).toHaveBeenCalledWith(createTeamDtoStub(2));
    });
  });

  describe('delete method', () => {
    it('should call service delete method passing teamId param', async () => {
      await controller.delete(teamIdStub);
      expect(service.delete).toHaveBeenCalledWith(teamIdStub);
    });
  });

  describe('edit method', () => {
    it('should call service edit method passing edit team dto', async () => {
      await controller.edit(editTeamDtoStub());
      expect(service.edit).toHaveBeenCalledWith(editTeamDtoStub());
    });
  });
});
