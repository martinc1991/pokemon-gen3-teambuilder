import z from 'zod';

export const CommonResponseSchema = z.object({ id: z.string(), name: z.string() }); // Used for create, edit, delete responses
