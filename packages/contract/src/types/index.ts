import { Slot, StatName, Team } from '@prisma/client';
import { IPokemonGetAllResponseElement } from '../contracts/pokemon-contract';

export type EvFieldName = 'evAttack' | 'evDefense' | 'evHp' | 'evSpAttack' | 'evSpDefense' | 'evSpeed';
export type IvFieldName = 'ivAttack' | 'ivDefense' | 'ivHp' | 'ivSpAttack' | 'ivSpDefense' | 'ivSpeed';
export type IPokemon = IPokemonGetAllResponseElement; // This type is in sync with the response of the get all pokemon endpoint
export type IStats = { [key in StatName]: number };
export type IBaseStats = {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
};

// The type of the web slot WITH pokemon
export interface FilledSlot extends Omit<Slot, 'team' | 'ability' | 'nature' | 'item'> {
  pokemon: IPokemon;
  order: number;
}

export interface ITeam extends Team {
  slots: FilledSlot[];
}
