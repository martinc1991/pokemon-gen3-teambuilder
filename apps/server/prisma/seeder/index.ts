import { naturesArray, typesArray } from 'contract';
import { abilities } from './data/abilities';
import { deoxysVariations } from './data/deoxys';
import { items } from './data/items';
import { learnsets } from './data/learnsets';
import { getMovesPromises } from './data/moves';
import { overrides } from './data/overrides';
import { getPokemonPromises } from './data/pokemon';
import { getMoveName } from './helpers/pokemon';
import { prismaSeederClient } from './helpers/seederClient';

const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

console.log(`Seeding environment: ${CYAN} ${process.env.ENV_NAME} ${RESET}`);

export async function seeder() {
  return await prismaSeederClient.$transaction(
    async (client) => {
      performance.mark('start');

      // Send pokemon promises
      const pokemonPromises = getPokemonPromises();
      const movesPromises = getMovesPromises();

      // Seed types
      console.log('Upserting types');
      typesArray.forEach(({ name, ...type }) => {
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
      naturesArray.forEach(({ name, ...nature }) => {
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
      items.forEach(({ name, ...item }) => {
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

      const abilitiesNames: string[] = abilities.map((ability) => {
        return ability.name;
      });

      abilities.forEach(({ name, ...ability }) => {
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
      const allPokemon = pokemons.concat(deoxysVariations);

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
              connect: learnsets[name].map((moveName) => {
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
              connect: learnsets[name].map((moveName) => {
                return { name: getMoveName(moveName) };
              }),
            },
          },
        });
      });

      console.log('Upserting pokemons finished');

      // Overrides
      overrides(client);

      performance.mark('end');
    },
    {
      maxWait: 1000 * 60 * 2,
      timeout: 1000 * 60 * 2,
    },
  );
}
