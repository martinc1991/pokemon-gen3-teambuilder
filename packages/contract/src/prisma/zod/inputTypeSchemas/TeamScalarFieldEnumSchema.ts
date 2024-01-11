import { z } from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'userName', 'slots', 'isSample', 'isPublic']);

export default TeamScalarFieldEnumSchema;
