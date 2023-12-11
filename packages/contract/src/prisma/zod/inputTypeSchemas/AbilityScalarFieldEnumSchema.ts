import { z } from 'zod';

export const AbilityScalarFieldEnumSchema = z.enum(['id', 'name', 'shortDescription', 'longDescription']);

export default AbilityScalarFieldEnumSchema;
