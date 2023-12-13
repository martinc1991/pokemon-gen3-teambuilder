import { z } from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'userName', 'isSample', 'isPublic']);

export default TeamScalarFieldEnumSchema;
