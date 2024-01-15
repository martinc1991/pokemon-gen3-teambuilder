import { z } from 'zod';

export const NatureNamesSchema = z.enum([
  'adamant',
  'bashful',
  'bold',
  'brave',
  'calm',
  'careful',
  'docile',
  'gentle',
  'hardy',
  'hasty',
  'impish',
  'jolly',
  'lax',
  'lonely',
  'mild',
  'modest',
  'naive',
  'naughty',
  'quiet',
  'quirky',
  'rash',
  'relaxed',
  'sassy',
  'serious',
  'timid',
]);

export type NatureNamesType = `${z.infer<typeof NatureNamesSchema>}`;

export default NatureNamesSchema;
