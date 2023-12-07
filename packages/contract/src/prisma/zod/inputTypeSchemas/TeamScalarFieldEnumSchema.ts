import { z } from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'userName']);

export default TeamScalarFieldEnumSchema;
