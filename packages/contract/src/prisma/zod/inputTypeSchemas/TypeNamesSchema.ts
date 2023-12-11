import { z } from 'zod';

export const TypeNamesSchema = z.enum([
  'normal',
  'ice',
  'ghost',
  'dark',
  'grass',
  'electric',
  'steel',
  'ground',
  'fighting',
  'bug',
  'poison',
  'rock',
  'water',
  'flying',
  'fire',
  'dragon',
  'psychic',
  'empty',
]);

export type TypeNamesType = `${z.infer<typeof TypeNamesSchema>}`;

export default TypeNamesSchema;
