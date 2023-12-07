import { z } from 'zod';

export const DamageClassSchema = z.enum(['physical', 'special', 'status']);

export type DamageClassType = `${z.infer<typeof DamageClassSchema>}`;

export default DamageClassSchema;
