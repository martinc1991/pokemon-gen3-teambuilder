import { LAST_POKEMON_DEX_NUMBER } from '@config/app';
import { Pokemon, PokemonClient, PokemonSpecies } from 'pokenode-ts';
import {
  PokemonMergedInfo,
  Seed_Pokemon,
  getGenThreeSprite,
  getGenThreeTypes,
  getPokemonBaseStats,
  getPossibleGenders,
} from '../helpers/pokemon';

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
