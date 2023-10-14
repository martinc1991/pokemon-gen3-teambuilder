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
import { prismaSeederClient } from './seederClient';

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

console.log(`Seeding environment: ${CYAN} ${process.env.ENV_NAME} ${RESET}`);

export async function seeder() {
  await prismaSeederClient.$transaction(
    async (client) => {
      performance.mark('start');

      // Send pokemon promises
      const pokemonPromises = getPokemonPromises();
      const movesPromises = getMovesPromises();

      // Seed types
      console.log('Upserting types');
      TYPES.forEach(({ name, ...type }) => {
        client.type.upsert({
          where: {
            name,
          },
          create: { ...type, name },
          update: type,
        });
      });
      console.log('Upserting types finished');

      // Seed natures
      console.log('Upserting natures');
      NATURES.forEach(({ name, ...nature }) => {
        client.nature.upsert({
          where: {
            name,
          },
          create: { ...nature, name },
          update: nature,
        });
      });
      console.log('Upserting natures finished');

      // Seed items
      console.log('Upserting items');
      ITEMS.forEach(({ name, ...item }) => {
        client.item.upsert({
          where: {
            name,
          },
          create: { ...item, name },
          update: item,
        });
      });
      console.log('Upserting items finished');

      // Seed abilities
      console.log('Upserting abilities');

      const abilitiesNames: string[] = ABILITIES.map((ability) => {
        return ability.name;
      });

      ABILITIES.forEach(({ name, ...ability }) => {
        client.ability.upsert({
          where: {
            name,
          },
          create: { ...ability, name },
          update: ability,
        });
      });
      console.log('Upserting abilities finished');

      const pokemons = await pokemonPromises;
      const moves = await movesPromises;
      const allPokemon = pokemons.concat(DEOXYS_VARIATIONS);

      // Seed moves
      console.log('Creating moves');
      moves.forEach(async ({ name, ...move }) => {
        await prismaSeederClient.move.upsert({
          where: {
            name,
          },
          create: { ...move, name },
          update: { ...move },
        });
      });

      console.log('Creating moves finished');

      // Seed pokemon
      console.log('Upserting pokemons');
      allPokemon.forEach(({ name, ...pkmn }) => {
        client.pokemon.upsert({
          where: { name },
          update: {
            ...pkmn,
            typeOne: { connect: { name: pkmn.typeOne } },
            typeTwo: { connect: { name: pkmn.typeTwo ?? 'empty' } },
            abilities: {
              connect: pkmn.abilities
                .filter((abilityName) => abilitiesNames.includes(abilityName))
                .map((name) => ({ name })),
            },
            learnset: {
              connect: LEARNSETS[name].map((moveName) => {
                return { name: getMoveName(moveName) };
              }),
            },
          },
          create: {
            ...pkmn,
            name,
            typeOne: { connect: { name: pkmn.typeOne } },
            typeTwo: { connect: { name: pkmn.typeTwo ?? 'empty' } },
            abilities: {
              connect: pkmn.abilities
                .filter((abilityName) => abilitiesNames.includes(abilityName))
                .map((name) => ({ name })),
            },
            learnset: {
              connect: LEARNSETS[name].map((moveName) => {
                return { name: getMoveName(moveName) };
              }),
            },
          },
        });
      });

      console.log('Upserting pokemons finished');
    },
    {
      maxWait: 1000 * 60 * 2,
      timeout: 1000 * 60 * 2,
    },
  );

  performance.mark('end');
}
