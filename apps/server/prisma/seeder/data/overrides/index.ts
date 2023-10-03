import { PrismaClient } from '@prisma/client';
import { overrideAbilitiesData } from './abilities';
import { overrideStatsData } from './stats';
import {
  PrismaClientOptions,
  DefaultArgs,
} from '@prisma/client/runtime/library';

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

type TransactionClient = Omit<
  PrismaClient<PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>;

export function overrides(client: TransactionClient) {
  statsOverrides(client);
  abilitiesOverrides(client);
}

function statsOverrides(client: TransactionClient) {
  console.log('Overriding stats');
  getKeys(overrideStatsData).forEach((pkmn) => {
    client.pokemon.update({
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

function abilitiesOverrides(client: TransactionClient) {
  console.log('Overriding abilities');

  getKeys(overrideAbilitiesData).forEach((pkmn) => {
    const abilities = overrideAbilitiesData[pkmn];

    client.pokemon.update({
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
