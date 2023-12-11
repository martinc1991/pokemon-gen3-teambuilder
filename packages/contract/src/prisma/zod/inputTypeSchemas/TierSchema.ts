import { z } from 'zod';

export const TierSchema = z.enum(['lc', 'nfe', 'nu', 'ou', 'pu', 'publ', 'uber', 'uu', 'uubl']);

export type TierType = `${z.infer<typeof TierSchema>}`;

export default TierSchema;
