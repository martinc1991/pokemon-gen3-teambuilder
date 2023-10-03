import { seeder } from './seeder';
import { prismaSeederClient } from './seeder/seederClient';

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
    await prismaSeederClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaSeederClient.$disconnect();
    process.exit(1);
  });
