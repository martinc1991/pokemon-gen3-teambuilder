import { Gender, TypeNames } from '@prisma/client';
import { IPokemonGetAllResponseElement } from 'contract';

export function pokemonStub(): IPokemonGetAllResponseElement {
  return {
    id: '83035ed6-e712-4146-b70d-16361ef035ef',
    name: 'ivysaur',
    nationalPokedexNumber: 2,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png',
    icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png',
    height: 10,
    weight: 130,
    typeOneName: TypeNames.grass,
    typeTwoName: TypeNames.poison,
    genders: [Gender.male, Gender.female],
    baseAttack: 10,
    baseDefense: 10,
    baseHp: 10,
    baseSpattack: 10,
    baseSpdefense: 10,
    baseSpeed: 10,
    tier: 'lc',
    abilities: [
      {
        id: '',
        longDescription: '',
        name: '',
        shortDescription: '',
      },
    ],
  };
}
