import { DamageClass, Gender, IBaseStats, Move, Pokemon as PokemonModel, SEREBII_URL, TypeNames } from 'contract';
import { Move as PokeApiMove, Pokemon, PokemonSpecies, PokemonType } from 'pokenode-ts';
import { ABILITIES_OVERRIDES, STATS_OVERRIDES } from '../data/overrides';
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

export function getGenThreeTypes(pokemon: Pokemon): [TypeNames, TypeNames] {
  // Get types
  let [typeOne, typeTwo] = getTypes(pokemon.types);

  // Si hubo un cambio de tipo
  if (pokemon.past_types.length) {
    pokemon.past_types.forEach((pastType) => {
      const genNumber = getGenerationNumber(pastType.generation.name);
      // Y el cambio se produjo despues de la generacion 3
      if (genNumber > 3) {
        [typeOne, typeTwo] = getTypes(pastType.types);
      }
    });
  }

  return [typeOne, typeTwo];
}

export function getGenThreeSprite(pokemon: Pokemon): string {
  return pokemon.sprites.versions['generation-iii'].emerald.front_default || 'no-sprite';
}

export function getPossibleGenders(rate: number): Gender[] {
  if (rate < 0) {
    return [Gender.genderless];
  }
  if (rate === 8) {
    return [Gender.female];
  }
  if (rate === 0) {
    return [Gender.male];
  }
  return [Gender.male, Gender.female];
}

// INFO: I know for a fact (according to poke API) that "stats" is an array with 6 objects with the stats properly ordered (hp, atk, def, spatk, spdef, spe)
const objProperties = ['baseHp', 'baseAttack', 'baseDefense', 'baseSpattack', 'baseSpdefense', 'baseSpeed'];

export function getPokemonBaseStats({ stats, name }: PokemonMergedInfo): IBaseStats {
  // INFO: override stats if needed
  if (STATS_OVERRIDES[name]) {
    return STATS_OVERRIDES[name];
  }

  return stats.reduce(
    (obj, stat, i) => {
      obj[objProperties[i]] = stat.base_stat;
      return obj;
    },
    {
      baseHp: 0,
      baseAttack: 0,
      baseDefense: 0,
      baseSpattack: 0,
      baseSpdefense: 0,
      baseSpeed: 0,
    }
  );
}

export function getPokemonAbilities({ name, abilities }: PokemonMergedInfo): string[] {
  // INFO: override abilities if needed
  if (ABILITIES_OVERRIDES[name]) {
    return ABILITIES_OVERRIDES[name];
  }
  return abilities.map((ab) => ab.ability.name);
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