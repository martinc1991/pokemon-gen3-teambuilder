import { Tier } from 'contract';
import { Seed_Pokemon, idToIconUrl } from '../../helpers/pokemon';
import { pokemonTiers } from '../tiers';

const attack: Seed_Pokemon = {
  abilities: ['pressure'],
  genders: ['genderless'],
  height: 17,
  weight: 608,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/386-attack.png',
  icon: idToIconUrl(386),
  typeOne: 'psychic',
  typeTwo: null,
  nationalPokedexNumber: 387, // INFO: given that nationalPokedexNumber is @unique, I'm gonna give it a different number
  name: 'deoxys-attack',
  baseHp: 50,
  baseAttack: 180,
  baseDefense: 20,
  baseSpattack: 180,
  baseSpdefense: 20,
  baseSpeed: 150,
  tier: Tier[pokemonTiers['deoxys-attack']],
};

const defense: Seed_Pokemon = {
  abilities: ['pressure'],
  genders: ['genderless'],
  height: 17,
  weight: 608,
  sprite:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/386-defense.png',
  icon: idToIconUrl(386),
  typeOne: 'psychic',
  typeTwo: null,
  nationalPokedexNumber: 388, // INFO: given that nationalPokedexNumber is @unique, I'm gonna give it a different number
  name: 'deoxys-defense',
  baseHp: 50,
  baseAttack: 70,
  baseDefense: 160,
  baseSpattack: 70,
  baseSpdefense: 160,
  baseSpeed: 90,
  tier: Tier[pokemonTiers['deoxys-defense']],
};

const speed: Seed_Pokemon = {
  abilities: ['pressure'],
  genders: ['genderless'],
  height: 17,
  weight: 608,
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/386-speed.png',
  icon: idToIconUrl(386),
  typeOne: 'psychic',
  typeTwo: null,
  nationalPokedexNumber: 389, // INFO: given that nationalPokedexNumber is @unique, I'm gonna give it a different number
  name: 'deoxys-speed',
  baseHp: 50,
  baseAttack: 95,
  baseDefense: 90,
  baseSpattack: 95,
  baseSpdefense: 90,
  baseSpeed: 180,
  tier: Tier[pokemonTiers['deoxys-speed']],
};

export const DEOXYS_VARIANTS = {
  attack,
  defense,
  speed,
};
