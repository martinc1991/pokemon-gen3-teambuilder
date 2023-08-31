import { PrismaClient } from '@prisma/client';
import { getAbilities } from './entities/abilities';
import { getItems } from './entities/items';
import { naturesArray } from './entities/natures';
import { getPokemonPromises } from './entities/pokemon';
import { typesArray } from './entities/types';

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

console.log(`Seeding environment: ${CYAN} ${process.env.ENV_NAME} ${RESET}`);

export async function seeder() {
  performance.mark('start');
  // Send pokemon promises
  const pokemonPromises = getPokemonPromises();
  const abilitiesPromises = getAbilities();
  const itemsPromises = getItems();

  // Seed types
  await prisma.type.createMany({
    data: typesArray,
  });

  // Seed natures
  await prisma.nature.createMany({
    data: naturesArray,
  });

  const items = await itemsPromises;
  const pokemons = await pokemonPromises;
  const abilities = await abilitiesPromises;

  // Seed items
  await prisma.item.createMany({
    data: items,
  });

  const abilitiesNames: string[] = [];

  abilities.forEach(async (ability) => {
    abilitiesNames.push(ability.name);
    await prisma.ability.create({
      data: ability,
    });
  });

  // Seed pokemon
  pokemons.forEach(async (pkmn) => {
    await prisma.pokemon.create({
      data: {
        ...pkmn,
        typeOne: {
          connect: { name: pkmn.typeOne },
        },
        typeTwo: {
          connect: { name: pkmn.typeTwo ?? 'empty' },
        },
        abilities: {
          connect: pkmn.abilities
            .filter((abilityName) => abilitiesNames.includes(abilityName))
            .map((name) => {
              return { name };
            }),
        },
      },
    });
  });

  performance.mark('end');
}
