import { Slot, StatName } from '@prisma/client';
import { IPokemonGetAllResponseElement } from '../contracts/pokemon-contract';

export { Gender, NatureNames, TypeNames } from '@prisma/client';

export type ITier = 'lc' | 'nfe' | 'nu' | 'ou' | 'pu' | 'publ' | 'uber' | 'uu' | 'uubl';
export type IPokemon = IPokemonGetAllResponseElement; // This type is in sync with the response of the get all pokemon endpoint
export type ISlot = Slot;
export type IStats = { [key in StatName]: number };
export type IBaseStats = {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
};
