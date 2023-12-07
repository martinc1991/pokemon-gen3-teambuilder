import { z } from 'zod';

export const ItemScalarFieldEnumSchema = z.enum(['id', 'name', 'effect', 'flingEffect', 'flingPower', 'sprite']);

export default ItemScalarFieldEnumSchema;
