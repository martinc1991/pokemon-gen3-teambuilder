import { PrismaClient } from '@prisma/client';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isString,
  registerDecorator,
} from 'class-validator';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const prisma = new PrismaClient();

@ValidatorConstraint({ name: 'abilityName', async: true })
export class AbilityNameValidator implements ValidatorConstraintInterface {
  async validate(abilityName: string): Promise<boolean> {
    if (!isString(abilityName)) return false;

    const value = await prisma.ability.findUnique({
      where: { name: abilityName },
    });

    return Boolean(value);
  }

  defaultMessage(args: ValidationArguments) {
    if (!isString(args.value)) {
      return `${args.property} ${ERROR_MESSAGES.MUST_BE_STRING}`;
    }
    return ERROR_MESSAGES.NOT_VALID_ABILITY_NAME;
  }
}

export function IsValidAbilityName() {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      validator: AbilityNameValidator,
    });
  };
}
