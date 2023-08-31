import { NatureNames, StatName } from '@prisma/client';

interface Seed_Nature {
  name: NatureNames;
  increased: StatName | null;
  decreased: StatName | null;
}

export const naturesArray: Seed_Nature[] = [
  { name: NatureNames.hardy, increased: null, decreased: null },
  {
    name: NatureNames.bold,
    increased: StatName.defense,
    decreased: StatName.attack,
  },
  {
    name: NatureNames.modest,
    increased: StatName.spattack,
    decreased: StatName.attack,
  },
  {
    name: NatureNames.calm,
    increased: StatName.spdefense,
    decreased: StatName.attack,
  },
  {
    name: NatureNames.timid,
    increased: StatName.speed,
    decreased: StatName.attack,
  },
  {
    name: NatureNames.lonely,
    increased: StatName.attack,
    decreased: StatName.defense,
  },
  { name: NatureNames.docile, increased: null, decreased: null },
  {
    name: NatureNames.mild,
    increased: StatName.spattack,
    decreased: StatName.defense,
  },
  {
    name: NatureNames.gentle,
    increased: StatName.spdefense,
    decreased: StatName.defense,
  },
  {
    name: NatureNames.hasty,
    increased: StatName.speed,
    decreased: StatName.defense,
  },
  {
    name: NatureNames.adamant,
    increased: StatName.attack,
    decreased: StatName.spattack,
  },
  { name: NatureNames.bashful, increased: null, decreased: null },
  {
    name: NatureNames.careful,
    increased: StatName.spdefense,
    decreased: StatName.spattack,
  },
  {
    name: NatureNames.rash,
    increased: StatName.spattack,
    decreased: StatName.spdefense,
  },
  {
    name: NatureNames.jolly,
    increased: StatName.speed,
    decreased: StatName.spattack,
  },
  {
    name: NatureNames.naughty,
    increased: StatName.attack,
    decreased: StatName.spdefense,
  },
  { name: NatureNames.quirky, increased: null, decreased: null },
  {
    name: NatureNames.naive,
    increased: StatName.speed,
    decreased: StatName.spdefense,
  },
  {
    name: NatureNames.impish,
    increased: StatName.defense,
    decreased: StatName.spattack,
  },
  {
    name: NatureNames.lax,
    increased: StatName.defense,
    decreased: StatName.spdefense,
  },
];
