import { Gender, TypeNames } from '@prisma/client';
import {
  Pokemon,
  PokemonClient,
  PokemonSpecies,
  PokemonType,
} from 'pokenode-ts';
import { LAST_POKEMON_DEX_NUMBER } from '../../../../config/app';
import { IBaseStats } from 'contract';

type PokemonMergedInfo = PokemonSpecies & Pokemon;

interface Seed_Pokemon extends IBaseStats {
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

const pokemonIds = Array.from(
  { length: LAST_POKEMON_DEX_NUMBER },
  (_, index) => index + 1,
);

const pokemonApi = new PokemonClient();

export async function getPokemonPromises(): Promise<Seed_Pokemon[]> {
  const merged: PokemonMergedInfo[] = [];

  const promises = pokemonIds.map<Promise<[Pokemon, PokemonSpecies]>>(
    async (id) => {
      const [pokemon, pokemonSpecies] = await Promise.all([
        pokemonApi.getPokemonById(id),
        pokemonApi.getPokemonSpeciesById(id),
      ]);
      return [pokemon, pokemonSpecies];
    },
  );

  const results = await Promise.all(promises);

  for (const [pokemon, pokemonSpecie] of results) {
    merged.push({ ...pokemonSpecie, ...pokemon });
  }

  return merged.map((pkmn) => {
    // Get types
    const [typeOne, typeTwo] = getGenThreeTypes(pkmn);

    const abilities = pkmn.abilities.map((ab) => ab.ability.name);
    const {
      baseHp,
      baseAttack,
      baseDefense,
      baseSpattack,
      baseSpdefense,
      baseSpeed,
    } = getPokemonBaseStats(pkmn);

    return {
      name: pkmn.name,
      nationalPokedexNumber: pkmn.id,
      sprite: getGenThreeSprite(pkmn),
      height: pkmn.height,
      weight: pkmn.weight,
      typeOne,
      typeTwo,
      abilities,
      genders: getPossibleGenders(pkmn.gender_rate),
      baseHp,
      baseAttack,
      baseDefense,
      baseSpattack,
      baseSpdefense,
      baseSpeed,
    };
  });
}

// Aux
function getGenerationNumber(gen: string): number {
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

function getTypes(type: PokemonType[]): [TypeNames, TypeNames | null] {
  const typeOne = type[0].type.name as TypeNames;
  const typeTwo = (type[1]?.type.name as TypeNames) || null;
  return [typeOne, typeTwo];
}

function getGenThreeTypes(pokemon: Pokemon): [TypeNames, TypeNames | null] {
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

function getGenThreeSprite(pokemon: Pokemon): string {
  return pokemon.sprites.versions['generation-iii'].emerald.front_default;
}

function getPossibleGenders(rate: number): Gender[] {
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

function getPokemonBaseStats({ stats }: PokemonMergedInfo): IBaseStats {
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
