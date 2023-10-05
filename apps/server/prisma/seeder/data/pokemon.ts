import { LAST_POKEMON_DEX_NUMBER } from '@config/app';
import { Tier } from '@prisma/client';
import { Pokemon, PokemonClient, PokemonSpecies } from 'pokenode-ts';
import {
  PokemonMergedInfo,
  Seed_Pokemon,
  getGenThreeSprite,
  getGenThreeTypes,
  getPokemonBaseStats,
  getPossibleGenders,
  idToIconUrl,
} from '../helpers/pokemon';
import { overrideAbilitiesData } from './overrides/abilities';
import { overrideStatsData } from './overrides/stats';
import { pokemonTiers } from './tiers';

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

    let abilities = pkmn.abilities.map((ab) => ab.ability.name);
    let {
      baseHp,
      baseAttack,
      baseDefense,
      baseSpattack,
      baseSpdefense,
      baseSpeed,
    } = getPokemonBaseStats(pkmn);

    // Overrides
    // Stats
    if (overrideStatsData[pkmn.name]) {
      baseHp = overrideStatsData[pkmn.name].hp;
      baseAttack = overrideStatsData[pkmn.name].attack;
      baseDefense = overrideStatsData[pkmn.name].defense;
      baseSpattack = overrideStatsData[pkmn.name].spattack;
      baseSpdefense = overrideStatsData[pkmn.name].spdefense;
      baseSpeed = overrideStatsData[pkmn.name].speed;
    }
    // Abilities
    if (overrideAbilitiesData[pkmn.name]) {
      abilities = overrideAbilitiesData[pkmn.name];
    }
    // No need to override types

    return {
      name: pkmn.name,
      nationalPokedexNumber: pkmn.id,
      sprite: getGenThreeSprite(pkmn),
      icon: idToIconUrl(pkmn.id),
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
      tier: Tier[pokemonTiers[pkmn.name]],
    };
  });
}
