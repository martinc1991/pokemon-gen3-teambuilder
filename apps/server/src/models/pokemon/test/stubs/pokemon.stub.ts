import { Gender, TypeNames } from '@prisma/client';

export function pokemonStub() {
  return {
    id: '83035ed6-e712-4146-b70d-16361ef035ef',
    name: 'ivysaur',
    nationalPokedexNumber: 2,
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png',
    height: 10,
    weight: 130,
    typeOneName: TypeNames.grass,
    typeTwoName: TypeNames.poison,
    genders: [Gender.male, Gender.female],
  };
}
