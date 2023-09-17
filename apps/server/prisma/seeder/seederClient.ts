import { PrismaClient } from '@prisma/client';

export const prismaSeederClient = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});
