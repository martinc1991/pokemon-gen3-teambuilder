import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { isValidNationalPokedexInteger } from '../helpers/pokemon.helper';

@ValidatorConstraint({ name: 'nationalPokedexNumber', async: false })
export class NationalPokedexNumberValidator implements ValidatorConstraintInterface {
  validate(num: number) {
    return isValidNationalPokedexInteger(num);
  }

  defaultMessage() {
    return ERROR_MESSAGES.NOT_VALID_POKEDEX_NUMBER;
  }
}
