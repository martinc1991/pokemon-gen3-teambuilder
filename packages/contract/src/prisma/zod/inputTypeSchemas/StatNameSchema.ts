import { z } from 'zod';

export const StatNameSchema = z.enum(['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']);

export type StatNameType = `${z.infer<typeof StatNameSchema>}`;

export default StatNameSchema;
