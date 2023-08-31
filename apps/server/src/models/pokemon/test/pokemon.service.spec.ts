import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { OrderBy, SortOrder } from '../dto';
import { PokemonController } from '../pokemon.controller';
import { PokemonService } from '../pokemon.service';
import { pokemonStub } from './stubs/pokemon.stub';
import { pokemonPaginationStub } from './stubs/pokemonPagination.stub';
import { PrismaService } from '@providers/prisma/prisma.service';

const mockedPokemonPrismaService = {
  pokemon: {
    findMany: jest.fn().mockResolvedValue([pokemonStub()]),
    findUnique: jest.fn(),
  },
};

describe('Pokemon service', () => {
  let service: PokemonService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        PokemonService,
        {
          provide: PrismaService,
          useValue: mockedPokemonPrismaService,
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  describe('getAll method', () => {
    it('should call prisma.pokemon.findMany with formatted pagination params', async () => {
      const expectedPaginationParams = {
        orderBy: {
          [OrderBy.NPN]: SortOrder.ASC,
        },
        skip: 0,
        take: 10,
      };
      const result = await service.getAll(pokemonPaginationStub());

      expect(prismaService.pokemon.findMany).toHaveBeenCalledWith(
        expectedPaginationParams,
      );
      expect(result[0]).toEqual(pokemonStub());
    });
  });

  describe('getOne method', () => {
    it('should call prisma.pokemon.findUnique with the right where clause', async () => {
      const expectedWhereClause = {
        nationalPokedexNumber: pokemonStub().nationalPokedexNumber,
      };

      jest
        .spyOn(prismaService.pokemon, 'findUnique')
        .mockResolvedValueOnce(pokemonStub());

      await service.getOne(pokemonStub().nationalPokedexNumber);

      expect(prismaService.pokemon.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expectedWhereClause,
        }),
      );
    });

    it('should return a pokemon', async () => {
      jest
        .spyOn(prismaService.pokemon, 'findUnique')
        .mockResolvedValueOnce(pokemonStub());

      const result = await service.getOne(pokemonStub().nationalPokedexNumber);

      expect(result).toEqual(pokemonStub());
    });

    it('should throw a not found exception if no pokemon is found', async () => {
      jest
        .spyOn(prismaService.pokemon, 'findUnique')
        .mockResolvedValueOnce(null);

      await expect(
        service.getOne(pokemonStub().nationalPokedexNumber),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
