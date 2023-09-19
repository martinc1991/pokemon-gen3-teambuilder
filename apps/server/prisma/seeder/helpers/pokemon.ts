import { Gender, TypeNames } from '@prisma/client';
import { IBaseStats } from 'contract';
import { Pokemon, PokemonSpecies, PokemonType } from 'pokenode-ts';

export type PokemonMergedInfo = PokemonSpecies & Pokemon;

export interface Seed_Pokemon extends IBaseStats {
  name: string;
  nationalPokedexNumber: number;
  sprite: string;
  height: number;
  weight: number;
  typeOne: TypeNames;
  typeTwo?: TypeNames;
  abilities: string[];
  genders: Gender[];
}

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
      return 9;
  }
}

export function getTypes(type: PokemonType[]): [TypeNames, TypeNames | null] {
  const typeOne = type[0].type.name as TypeNames;
  const typeTwo = (type[1]?.type.name as TypeNames) || null;
  return [typeOne, typeTwo];
}

export function getGenThreeTypes(
  pokemon: Pokemon,
): [TypeNames, TypeNames | null] {
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
  return pokemon.sprites.versions['generation-iii'].emerald.front_default;
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
const objProperties = [
  'baseHp',
  'baseAttack',
  'baseDefense',
  'baseSpattack',
  'baseSpdefense',
  'baseSpeed',
];

export function getPokemonBaseStats({ stats }: PokemonMergedInfo): IBaseStats {
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
    },
  );
}
