import { PrismaClient } from '@prisma/client';
import { seeder } from './seeder';

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

seeder()
  .then(() => {
    console.log(
      `${CYAN} Seeded in: ${(
        performance.measure('final', 'start', 'end').duration / 1000
      ).toFixed(2)} s ${RESET}`,
    );
  })
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
