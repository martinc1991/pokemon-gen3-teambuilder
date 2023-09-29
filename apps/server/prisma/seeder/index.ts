import { naturesArray, typesArray } from 'contract';
import { deoxysVariations } from './data/deoxys';
import { overrides } from './data/overrides';
import { getAbilities } from './entities/abilities';
import { getItems } from './entities/items';
import { getPokemonPromises } from './entities/pokemon';
import { prismaSeederClient } from './seederClient';

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
  console.log('Creating types');
  await prismaSeederClient.type.createMany({
    data: typesArray,
  });
  console.log('Creating types finished');

  // Seed natures
  console.log('Creating natures');
  await prismaSeederClient.nature.createMany({
    data: naturesArray,
  });
  console.log('Creating natures finished');

  const items = await itemsPromises;
  const pokemons = await pokemonPromises;
  const abilities = await abilitiesPromises;

  // Seed items
  console.log('Creating items');
  await prismaSeederClient.item.createMany({
    data: items,
  });
  console.log('Creating items finished');

  const abilitiesNames: string[] = [];

  console.log('Creating abilities');
  abilities.forEach(async (ability) => {
    abilitiesNames.push(ability.name);
    await prismaSeederClient.ability.create({
      data: ability,
    });
  });
  console.log('Creating abilities finished');

  const allPokemon = pokemons.concat(deoxysVariations);

  // Seed pokemon
  console.log('Creating pokemons');
  allPokemon.forEach(async (pkmn) => {
    await prismaSeederClient.pokemon.create({
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
  console.log('Creating pokemons finished');

  // Overrides
  await overrides();

  performance.mark('end');
}
