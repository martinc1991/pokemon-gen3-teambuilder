import {
  ABILITIES,
  DEOXYS_VARIATIONS,
  ITEMS,
  LEARNSETS,
  NATURES,
  TYPES,
  getMoveName,
  getMovesPromises,
  getPokemonPromises,
} from 'pokemon-info';
import { isDbSeeded } from './helpers';
import { prismaSeederClient } from './seederClient';

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

console.log(`Seeding environment: ${CYAN} ${process.env.ENV_NAME} ${RESET}`);

export async function seeder() {
  await prismaSeederClient.$transaction(
    async (client) => {
      performance.mark('start');

      const dbSeeded = await isDbSeeded();

      if (dbSeeded) {
        // Dont seed db if already seeded
        console.log('DB already seeded');
        return;
      }

      // Send pokemon promises
      const pokemonPromises = getPokemonPromises();
      const movesPromises = getMovesPromises();

      // Seed types
      console.log('Upserting types');
      const TYPES__PROMISES = [];

      TYPES.forEach(({ name, ...type }) => {
        const p = client.type.upsert({
          where: {
            name,
          },
          create: { ...type, name },
          update: type,
        });
        TYPES__PROMISES.push(p);
      });

      await Promise.all(TYPES__PROMISES);
      console.log('Upserting types finished');

      // Seed natures
      console.log('Upserting natures');
      const NATURES__PROMISES = [];
      NATURES.forEach(({ name, ...nature }) => {
        const p = client.nature.upsert({
          where: {
            name,
          },
          create: { ...nature, name },
          update: nature,
        });

        NATURES__PROMISES.push(p);
      });
      await Promise.all(NATURES__PROMISES);
      console.log('Upserting natures finished');

      // Seed items
      console.log('Upserting items');
      const ITEMS__PROMISES = [];
      ITEMS.forEach(({ name, ...item }) => {
        const p = client.item.upsert({
          where: {
            name,
          },
          create: { ...item, name },
          update: item,
        });
        ITEMS__PROMISES.push(p);
      });
      await Promise.all(ITEMS__PROMISES);
      console.log('Upserting items finished');

      // Seed abilities
      console.log('Upserting abilities');

      const abilitiesNames: string[] = ABILITIES.map((ability) => {
        return ability.name;
      });
      const ABILITIES__PROMISES = [];

      ABILITIES.forEach(({ name, ...ability }) => {
        const p = client.ability.upsert({
          where: {
            name,
          },
          create: { ...ability, name },
          update: ability,
        });
        ABILITIES__PROMISES.push(p);
      });
      await Promise.all(ABILITIES__PROMISES);
      console.log('Upserting abilities finished');

      const pokemons = await pokemonPromises;
      const moves = await movesPromises;
      const allPokemon = pokemons.concat(DEOXYS_VARIATIONS);

      // Seed moves
      console.log('Upserting moves');
      const MOVES__PROMISES = [];
      moves.forEach(({ name, ...move }) => {
        const p = prismaSeederClient.move.upsert({
          where: {
            name,
          },
          create: { ...move, name },
          update: { ...move },
        });
        MOVES__PROMISES.push(p);
      });
      await Promise.all(MOVES__PROMISES);

      console.log('Upserting moves finished');

      // Seed pokemon
      console.log('Upserting pokemons');
      const POKEMON__PROMISES = [];
      allPokemon.forEach(async ({ nationalPokedexNumber, ...pkmn }) => {
        const p = client.pokemon.upsert({
          where: { nationalPokedexNumber },
          update: {
            ...pkmn,
            typeOne: { connect: { name: pkmn.typeOne } },
            typeTwo: { connect: { name: pkmn.typeTwo ?? 'empty' } },
            abilities: {
              connect: pkmn.abilities.filter((abilityName) => abilitiesNames.includes(abilityName)).map((name) => ({ name })),
            },
            learnset: {
              connect: LEARNSETS[pkmn.name].map((moveName) => {
                return { name: getMoveName(moveName) };
              }),
            },
          },
          create: {
            ...pkmn,
            nationalPokedexNumber,
            typeOne: { connect: { name: pkmn.typeOne } },
            typeTwo: { connect: { name: pkmn.typeTwo ?? 'empty' } },
            abilities: {
              connect: pkmn.abilities.filter((abilityName) => abilitiesNames.includes(abilityName)).map((name) => ({ name })),
            },
            learnset: {
              connect: LEARNSETS[pkmn.name].map((moveName) => {
                return { name: getMoveName(moveName) };
              }),
            },
          },
        });

        POKEMON__PROMISES.push(p);
      });

      await Promise.all(POKEMON__PROMISES);

      console.log('Upserting pokemons finished');
    },
    {
      maxWait: 1000 * 60 * 2,
      timeout: 1000 * 60 * 2,
    },
  );

  performance.mark('end');
}
