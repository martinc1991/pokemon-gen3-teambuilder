import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidNationalPokedexNumber } from 'utils';
import { ERROR_MESSAGES } from '../constants/errorMessages';

@Injectable()
export class NationalPokedexNumberPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const id = parseFloat(value);

    if (!isValidNationalPokedexNumber(id)) {
      throw new BadRequestException(ERROR_MESSAGES.NOT_VALID_POKEDEX_NUMBER);
    }

    return id;
  }
}
