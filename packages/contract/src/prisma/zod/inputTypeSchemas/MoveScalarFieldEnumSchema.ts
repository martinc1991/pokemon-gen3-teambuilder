import { z } from 'zod';

export const MoveScalarFieldEnumSchema = z.enum(['id', 'name', 'accuracy', 'damageClass', 'description', 'power', 'pp', 'target', 'type']);

export default MoveScalarFieldEnumSchema;
