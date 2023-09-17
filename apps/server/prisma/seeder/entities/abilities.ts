import { Ability, PokemonClient } from 'pokenode-ts';

const pokemonApi = new PokemonClient();

interface Seed_Ability {
  name: string;
  shortDescription: string;
  longDescription: string;
}

export async function getAbilities(): Promise<Seed_Ability[]> {
  const response = await fetch('https://pokeapi.co/api/v2/ability?limit=100'); // it's okay, there are only 76 abilities in gen3

  const abilites = await response.json();

  const abilitiesPromises = abilites.results.map(
    ({ name }: { name: string }) => {
      return pokemonApi.getAbilityByName(name);
    },
  );

  const info = (await Promise.all(abilitiesPromises)) as Ability[];

  const results: Seed_Ability[] = info
    .filter((ability) => ability.generation.name === 'generation-iii')
    .map((ab) => {
      return {
        name: ab.name,
        shortDescription: ab.effect_entries[1].short_effect,
        longDescription: ab.effect_entries[1].effect,
      };
    });

  return results;
}
