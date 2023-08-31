import { Test } from '@nestjs/testing';
import { PokemonController } from '../pokemon.controller';
import { PokemonService } from '../pokemon.service';
import { pokemonStub } from './stubs/pokemon.stub';
import { pokemonPaginationStub } from './stubs/pokemonPagination.stub';

const mockedPokemonService = {
  getAll: jest.fn().mockResolvedValue([pokemonStub()]),
  getOne: jest.fn().mockResolvedValueOnce(pokemonStub()),
};

describe('Pokemon controller', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: mockedPokemonService,
        },
      ],
    }).compile();

    service = moduleRef.get<PokemonService>(PokemonService);
    controller = moduleRef.get<PokemonController>(PokemonController);

    jest.clearAllMocks();
  });

  describe('getAll method', () => {
    it('should call service getAll method passng pagination params', async () => {
      const result = await controller.getAll(pokemonPaginationStub());

      expect(service.getAll).toHaveBeenCalledWith(pokemonPaginationStub());
      expect(result[0]).toEqual(pokemonStub());
    });
  });

  describe('getOne method', () => {
    it('should call service getOne method passing nationalDexNumber param', async () => {
      const result = await controller.getOne(
        pokemonStub().nationalPokedexNumber,
      );

      expect(service.getOne).toHaveBeenCalledWith(
        pokemonStub().nationalPokedexNumber,
      );
      expect(result).toEqual(pokemonStub());
    });
  });
});
