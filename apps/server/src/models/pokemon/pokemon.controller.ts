import { NationalPokedexNumberPipe } from '@common/pipes/nationalPokedexNumber.pipe';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { NestControllerInterface, TsRest, nestControllerContract } from '@ts-rest/nest';
import { IPokemonContract, pokemonContract } from 'contract';
import { PokemonPaginationDto } from './dto';
import { PokemonService } from './pokemon.service';

const c: IPokemonContract = nestControllerContract(pokemonContract);

@Controller('')
export class PokemonController implements NestControllerInterface<typeof c> {
  constructor(private pokemonService: PokemonService) {}

  @TsRest(c.getAll)
  @Get()
  async getAll(@Query() pagination: PokemonPaginationDto) {
    const pokemon = await this.pokemonService.getAll(pagination);

    return { status: 200 as const, body: pokemon };
  }

  @TsRest(c.getOne)
  @Get(':nationalDexNumber')
  async getOne(
    @Param('nationalDexNumber', NationalPokedexNumberPipe)
    nationalDexNumber: number,
  ) {
    const pokemon = await this.pokemonService.getOne(nationalDexNumber);

    return {
      status: 200 as const,
      body: pokemon,
    };
  }
}
