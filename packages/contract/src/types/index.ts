import { Team } from '@prisma/client';
import { IPokemonGetAllResponseElement } from '../contracts/pokemon-contract';
import { Slot } from '../prisma/zod';

export type EvFieldName = 'evAttack' | 'evDefense' | 'evHp' | 'evSpAttack' | 'evSpDefense' | 'evSpeed';
export type IvFieldName = 'ivAttack' | 'ivDefense' | 'ivHp' | 'ivSpAttack' | 'ivSpDefense' | 'ivSpeed';
export type IBaseStats = {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
};

// The type of the web slot WITH pokemon
export interface FilledSlot extends Slot {
  pokemon: IPokemonGetAllResponseElement;
  order: number;
}

// The type of the web team WITH filled slots
export interface FilledTeam extends Team {
  slots: FilledSlot[];
}
