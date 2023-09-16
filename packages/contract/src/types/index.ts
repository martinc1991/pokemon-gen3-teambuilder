import { Pokemon, Slot } from '@prisma/client';

export { Gender, NatureNames, TypeNames } from '@prisma/client';

export type ITier = 'lc' | 'nfe' | 'nu' | 'ou' | 'pu' | 'publ' | 'uber' | 'uu' | 'uubl';
export type IPokemon = Pokemon;
export type ISlot = Slot;
