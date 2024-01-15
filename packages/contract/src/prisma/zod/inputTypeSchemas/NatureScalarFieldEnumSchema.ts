import { z } from 'zod';

export const NatureScalarFieldEnumSchema = z.enum(['id', 'name', 'increased', 'decreased']);

export default NatureScalarFieldEnumSchema;
