import { TeamWithFilledSlots } from 'contract';

export const KIKE_TEAM: TeamWithFilledSlots = {
  id: 'sample-team-kike',
  userName: 'Kike',
  name: 'Initial team',
  description: 'Put together 5 minutes into the game.',
  isSample: true,
  isPublic: true,
  slots: [
    {
      id: 'local-slot-_JZJ6E',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 255,
      name: '',
      abilityName: 'blaze',
      pokemon: {
        id: '8b5147db-7230-4a12-93a3-dfecb3649ea0',
        name: 'torchic',
        nationalPokedexNumber: 255,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/255.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/255.gif',
        height: 4,
        weight: 25,
        typeOneName: 'fire',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'lc',
        baseHp: 45,
        baseAttack: 60,
        baseDefense: 40,
        baseSpattack: 70,
        baseSpdefense: 50,
        baseSpeed: 45,
        abilities: [
          {
            id: '365353d2-32e8-47a3-98c1-0b2a3560ceca',
            name: 'blaze',
            shortDescription: 'Strengthens fire moves to inflict 1.5x  damage at 1/3 max HP or less.',
            longDescription:
              'When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5x  as much regular damage.',
          },
        ],
      },
      natureName: 'hasty',
      itemName: null,
      shiny: false,
      evHp: 21,
      evAttack: 26,
      evDefense: 32,
      evSpAttack: 22,
      evSpDefense: 29,
      evSpeed: 41,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 0,
      gender: 'male',
      level: 11,
      happiness: 255,
      moveOneName: 'ember',
      moveTwoName: 'scratch',
      moveThreeName: 'growl',
      moveFourName: null,
    },
    {
      id: 'local-slot-ZYrc1J',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 263,
      name: '',
      abilityName: 'pickup',
      pokemon: {
        id: '4ecc725e-d36d-4e8b-9762-851c96d6f9c9',
        name: 'zigzagoon',
        nationalPokedexNumber: 263,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/263.gif',
        height: 4,
        weight: 175,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nfe',
        baseHp: 38,
        baseAttack: 30,
        baseDefense: 41,
        baseSpattack: 30,
        baseSpdefense: 41,
        baseSpeed: 60,
        abilities: [
          {
            id: '6b77660b-b6d6-40c2-902b-0cd548813fcd',
            name: 'pickup',
            shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
            longDescription:
              "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
          },
        ],
      },
      natureName: 'careful',
      itemName: 'master-ball',
      shiny: false,
      evHp: 0,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 0,
      evSpDefense: 0,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 1,
      gender: 'male',
      level: 3,
      happiness: 255,
      moveOneName: 'tackle',
      moveTwoName: 'tail-whip',
      moveThreeName: null,
      moveFourName: null,
    },
    {
      id: 'local-slot-mieKdd',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 263,
      name: '',
      abilityName: 'pickup',
      pokemon: {
        id: '4ecc725e-d36d-4e8b-9762-851c96d6f9c9',
        name: 'zigzagoon',
        nationalPokedexNumber: 263,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/263.gif',
        height: 4,
        weight: 175,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nfe',
        baseHp: 38,
        baseAttack: 30,
        baseDefense: 41,
        baseSpattack: 30,
        baseSpdefense: 41,
        baseSpeed: 60,
        abilities: [
          {
            id: '6b77660b-b6d6-40c2-902b-0cd548813fcd',
            name: 'pickup',
            shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
            longDescription:
              "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
          },
        ],
      },
      natureName: 'docile',
      itemName: 'twisted-spoon',
      shiny: false,
      evHp: 0,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 0,
      evSpDefense: 0,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 2,
      gender: 'female',
      level: 3,
      happiness: 255,
      moveOneName: 'tackle',
      moveTwoName: 'tail-whip',
      moveThreeName: null,
      moveFourName: null,
    },
    {
      id: 'local-slot-lmVaYn',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 263,
      name: '',
      abilityName: 'pickup',
      pokemon: {
        id: '4ecc725e-d36d-4e8b-9762-851c96d6f9c9',
        name: 'zigzagoon',
        nationalPokedexNumber: 263,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/263.gif',
        height: 4,
        weight: 175,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nfe',
        baseHp: 38,
        baseAttack: 30,
        baseDefense: 41,
        baseSpattack: 30,
        baseSpdefense: 41,
        baseSpeed: 60,
        abilities: [
          {
            id: '6b77660b-b6d6-40c2-902b-0cd548813fcd',
            name: 'pickup',
            shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
            longDescription:
              "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
          },
        ],
      },
      natureName: 'docile',
      itemName: 'thick-club',
      shiny: false,
      evHp: 0,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 0,
      evSpDefense: 0,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 3,
      gender: 'male',
      level: 3,
      happiness: 255,
      moveOneName: 'tackle',
      moveTwoName: 'tail-whip',
      moveThreeName: null,
      moveFourName: null,
    },
    {
      id: 'local-slot-XpJZ98',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 263,
      name: '',
      abilityName: 'pickup',
      pokemon: {
        id: '4ecc725e-d36d-4e8b-9762-851c96d6f9c9',
        name: 'zigzagoon',
        nationalPokedexNumber: 263,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/263.gif',
        height: 4,
        weight: 175,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nfe',
        baseHp: 38,
        baseAttack: 30,
        baseDefense: 41,
        baseSpattack: 30,
        baseSpdefense: 41,
        baseSpeed: 60,
        abilities: [
          {
            id: '6b77660b-b6d6-40c2-902b-0cd548813fcd',
            name: 'pickup',
            shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
            longDescription:
              "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
          },
        ],
      },
      natureName: 'docile',
      itemName: 'up-grade',
      shiny: false,
      evHp: 0,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 0,
      evSpDefense: 0,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 4,
      gender: 'male',
      level: 3,
      happiness: 255,
      moveOneName: 'tackle',
      moveTwoName: 'tail-whip',
      moveThreeName: null,
      moveFourName: null,
    },
    {
      id: 'local-slot-w2jbPS',
      teamId: 'sample-team-kike',
      nationalPokedexNumber: 263,
      name: '',
      abilityName: 'pickup',
      pokemon: {
        id: '4ecc725e-d36d-4e8b-9762-851c96d6f9c9',
        name: 'zigzagoon',
        nationalPokedexNumber: 263,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/263.gif',
        height: 4,
        weight: 175,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nfe',
        baseHp: 38,
        baseAttack: 30,
        baseDefense: 41,
        baseSpattack: 30,
        baseSpdefense: 41,
        baseSpeed: 60,
        abilities: [
          {
            id: '6b77660b-b6d6-40c2-902b-0cd548813fcd',
            name: 'pickup',
            shortDescription: "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
            longDescription:
              "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one. The air balloon and eject button cannot be picked up. The items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
          },
        ],
      },
      natureName: 'docile',
      itemName: 'leftovers',
      shiny: false,
      evHp: 0,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 0,
      evSpDefense: 0,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 5,
      gender: 'male',
      level: 2,
      happiness: 255,
      moveOneName: 'tackle',
      moveTwoName: 'tail-whip',
      moveThreeName: null,
      moveFourName: null,
    },
  ],
};
