import { z } from 'zod';

export const TypeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'damageClass',
  'noDamageTo',
  'halfDamageTo',
  'doubleDamageTo',
  'noDamageFrom',
  'halfDamageFrom',
  'doubleDamageFrom',
]);

export default TypeScalarFieldEnumSchema;
