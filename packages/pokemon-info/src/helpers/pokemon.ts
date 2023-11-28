import { Gender, Move, Pokemon as PokemonModel, TypeNames } from 'contract';
import { UNIQUE_MOVES_MAP } from '../data/uniqueMovesMap';

export interface Seed_Pokemon extends Omit<PokemonModel, 'id' | 'typeOneName' | 'typeTwoName'> {
  typeOne: TypeNames;
  typeTwo: TypeNames;
  abilities: string[];
  genders: Gender[];
}

export type Seed_Move = Omit<Move, 'id'>;

// Aux
function removeHyphen(str: string): string {
  return str.replace(/-/g, '');
}

// Removes '-' and then uses a move name map for consistency
export function getMoveName(moveName: string): string {
  const name = removeHyphen(moveName);
  return UNIQUE_MOVES_MAP[name];
}
