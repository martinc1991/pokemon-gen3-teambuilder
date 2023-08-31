import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonPaginationDto } from './dto';
import { PokemonService } from './pokemon.service';
import { NationalPokedexNumberPipe } from '@common/pipes/nationalPokedexNumber.pipe';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  getAll(@Query() pagination: PokemonPaginationDto) {
    return this.pokemonService.getAll(pagination);
  }

  @Get(':nationalDexNumber')
  getOne(
    @Param('nationalDexNumber', NationalPokedexNumberPipe)
    nationalDexNumber: number,
  ) {
    return this.pokemonService.getOne(nationalDexNumber);
  }
}
