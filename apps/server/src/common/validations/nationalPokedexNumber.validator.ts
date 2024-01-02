import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { isValidNationalPokedexNumber } from 'utils';
import { ERROR_MESSAGES } from '../constants/errorMessages';

@ValidatorConstraint({ name: 'nationalPokedexNumber', async: false })
export class NationalPokedexNumberValidator implements ValidatorConstraintInterface {
  validate(num: number) {
    return isValidNationalPokedexNumber(num);
  }

  defaultMessage() {
    return ERROR_MESSAGES.NOT_VALID_POKEDEX_NUMBER;
  }
}
