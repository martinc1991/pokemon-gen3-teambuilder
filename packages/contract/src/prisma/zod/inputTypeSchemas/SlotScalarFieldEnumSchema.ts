import { z } from 'zod';

export const SlotScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'teamId',
  'nationalPokedexNumber',
  'order',
  'abilityName',
  'natureName',
  'evHp',
  'evAttack',
  'evDefense',
  'evSpAttack',
  'evSpDefense',
  'evSpeed',
  'ivHp',
  'ivAttack',
  'ivDefense',
  'ivSpAttack',
  'ivSpDefense',
  'ivSpeed',
  'itemName',
  'shiny',
  'gender',
  'level',
  'happiness',
  'moveOneName',
  'moveTwoName',
  'moveThreeName',
  'moveFourName',
]);

export default SlotScalarFieldEnumSchema;
