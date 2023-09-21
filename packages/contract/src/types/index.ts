import { Pokemon, Slot, StatName } from '@prisma/client';

export { Gender, NatureNames, TypeNames } from '@prisma/client';

export type ITier = 'lc' | 'nfe' | 'nu' | 'ou' | 'pu' | 'publ' | 'uber' | 'uu' | 'uubl';
export type IPokemon = Pokemon;
export type ISlot = Slot;
export type ISlotOrder = 0 | 1 | 2 | 3 | 4 | 5;
export type IStats = { [key in StatName]: number };
export type IBaseStats = {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
};
