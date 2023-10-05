import { overrideAbilitiesData } from './abilities';
import { overrideStatsData } from './stats';
import { prismaSeederClient } from 'prisma/seeder/helpers/seederClient';

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export async function overrides() {
  await statsOverrides();
  await abilitiesOverrides();
}

async function statsOverrides() {
  console.log('Overriding stats');
  getKeys(overrideStatsData).forEach(async (pkmn) => {
    await prismaSeederClient.pokemon.update({
      where: {
        name: pkmn,
      },
      data: {
        baseHp: overrideStatsData[pkmn].hp,
        baseAttack: overrideStatsData[pkmn].attack,
        baseDefense: overrideStatsData[pkmn].defense,
        baseSpattack: overrideStatsData[pkmn].spattack,
        baseSpdefense: overrideStatsData[pkmn].spdefense,
        baseSpeed: overrideStatsData[pkmn].speed,
      },
    });
  });
  console.log('Overriding stats finished');
}

async function abilitiesOverrides() {
  console.log('Overriding abilities');

  getKeys(overrideAbilitiesData).forEach(async (pkmn) => {
    const abilities = overrideAbilitiesData[pkmn];

    await prismaSeederClient.pokemon.update({
      where: {
        name: pkmn,
      },
      data: {
        abilities: {
          set: [],
          connect: abilities.map((ability) => {
            return { name: ability };
          }),
        },
      },
    });
  });
  console.log('Overriding abilities finished');
}
