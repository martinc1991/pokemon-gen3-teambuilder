import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { isValidNationalPokedexInteger } from '../helpers/pokemon.helper';

@Injectable()
export class NationalPokedexNumberPipe
  implements PipeTransform<string, number>
{
  transform(value: string): number {
    const id = parseFloat(value);

    if (!isValidNationalPokedexInteger(id)) {
      throw new BadRequestException(ERROR_MESSAGES.NOT_VALID_POKEDEX_NUMBER);
    }

    return id;
  }
}
