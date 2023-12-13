import z from 'zod';

export const PaginationParamsSchema = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
});
export const SortOrderParamsSchema = z.object({
  orderBy: z.string().optional(),
  sortOrder: z.string().optional(),
});
