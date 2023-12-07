import { z } from 'zod';

export const PokemonScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'nationalPokedexNumber',
  'sprite',
  'icon',
  'height',
  'weight',
  'typeOneName',
  'typeTwoName',
  'genders',
  'tier',
  'baseHp',
  'baseAttack',
  'baseDefense',
  'baseSpattack',
  'baseSpdefense',
  'baseSpeed',
]);

export default PokemonScalarFieldEnumSchema;
