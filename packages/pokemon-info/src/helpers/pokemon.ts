import { DamageClass, Gender, Move, Pokemon as PokemonModel, SEREBII_URL, TypeNames } from 'contract';
import { Move as PokeApiMove, Pokemon, PokemonSpecies, PokemonType } from 'pokenode-ts';
import { UNIQUE_MOVES_MAP } from '../data/uniqueMovesMap';

export type PokemonMergedInfo = PokemonSpecies & Pokemon;

export interface Seed_Pokemon extends Omit<PokemonModel, 'id' | 'typeOneName' | 'typeTwoName'> {
  typeOne: TypeNames;
  typeTwo: TypeNames;
  abilities: string[];
  genders: Gender[];
}

export type Seed_Move = Omit<Move, 'id'>;

// Aux
export function getGenerationNumber(gen: string): number {
  const roman = gen.split('-')[1];
  switch (roman) {
    case 'i':
      return 1;
    case 'ii':
      return 2;
    case 'iii':
      return 3;
    case 'iv':
    case 'v':
    case 'vi':
    case 'vii':
    case 'viii':
    case 'ix':
    default:
      return 9;
  }
}

export function getTypes(type: PokemonType[]): [TypeNames, TypeNames] {
  const typeOne = type[0].type.name as TypeNames;
  const typeTwo = (type[1]?.type.name as TypeNames) || TypeNames.empty;
  return [typeOne, typeTwo];
}

export function idToIconUrl(id: number, fetchStatic = false): string {
  const _id = id.toString().padStart(3, '0');
  if (id > 493 || fetchStatic) {
    return `${SEREBII_URL}/pokedex-sm/icon/${_id}.png`; // static (only until volcanion (721) )
  }
  return `${SEREBII_URL}/pokedex-rs/icon/${_id}.gif`; // animated gifs (only until arceus (493) )
}

export function getMoveDamageClass({ type, damage_class }: PokeApiMove): DamageClass {
  if (damage_class?.name && damage_class.name === 'status') return damage_class.name;

  return getDamageClassFromType(type.name as TypeNames);
}

function getDamageClassFromType(type: TypeNames): DamageClass {
  switch (type) {
    case TypeNames.dark:
    case TypeNames.fire:
    case TypeNames.water:
    case TypeNames.electric:
    case TypeNames.grass:
    case TypeNames.ice:
    case TypeNames.psychic:
    case TypeNames.dragon:
      return DamageClass.special;

    default:
      return DamageClass.physical;
  }
}

function removeHyphen(str: string): string {
  return str.replace(/-/g, '');
}

// Removes '-' and then uses a move name map for consistency
export function getMoveName(moveName: string): string {
  const name = removeHyphen(moveName);
  return UNIQUE_MOVES_MAP[name];
}
