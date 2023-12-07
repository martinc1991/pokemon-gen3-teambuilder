import { FilledTeam } from 'contract';

export const RED_TEAM: FilledTeam = {
  id: 'sample-team-red',
  userName: 'Red',
  name: "Red's team",
  description: 'The team Red uses when you first meet him in Mt Silver.',
  slots: [
    {
      id: 'local-slot-c-y7ii',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 25,
      name: '',
      abilityName: 'static',
      pokemon: {
        id: 'd451a6e7-a2f1-429f-9f26-6e083283a6a5',
        name: 'pikachu',
        nationalPokedexNumber: 25,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/025.gif',
        height: 4,
        weight: 60,
        typeOneName: 'electric',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'nu',
        baseHp: 35,
        baseAttack: 55,
        baseDefense: 30,
        baseSpattack: 50,
        baseSpdefense: 40,
        baseSpeed: 90,
        abilities: [
          {
            id: 'cc0c7c94-3379-4130-ab60-0b6a6f65f1fa',
            name: 'static',
            shortDescription: 'Has a 30% chance of paralyzing attacking Pokémon on contact.',
            longDescription:
              "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed. Pokémon that are immune to electric-type moves can still be paralyzed by this ability. Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
          },
        ],
      },
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 4,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 252,
      evSpDefense: 0,
      evSpeed: 252,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 0,
      gender: 'male',
      level: 81,
      happiness: 255,
      moveOneName: 'charm',
      moveTwoName: 'quick-attack',
      moveThreeName: 'thunderbolt',
      moveFourName: 'thunder',
    },
    {
      id: 'local-slot-prdidt',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 196,
      name: '',
      abilityName: 'synchronize',
      pokemon: {
        id: 'cf319392-72d2-430b-8684-b04ed2192392',
        name: 'espeon',
        nationalPokedexNumber: 196,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/196.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/196.gif',
        height: 9,
        weight: 265,
        typeOneName: 'psychic',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'uubl',
        baseHp: 65,
        baseAttack: 65,
        baseDefense: 60,
        baseSpattack: 130,
        baseSpdefense: 95,
        baseSpeed: 110,
        abilities: [
          {
            id: '61a2fae1-db18-4331-929c-00227f9a5013',
            name: 'synchronize',
            shortDescription: 'Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.',
            longDescription:
              "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment. This ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb. Overworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
          },
        ],
      },
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 4,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 252,
      evSpDefense: 0,
      evSpeed: 252,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 1,
      gender: 'male',
      level: 73,
      happiness: 255,
      moveOneName: 'mud-slap',
      moveTwoName: 'reflect',
      moveThreeName: 'swift',
      moveFourName: 'psychic',
    },
    {
      id: 'local-slot-5wg4Px',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 143,
      name: '',
      abilityName: 'immunity',
      pokemon: {
        id: 'b7b43d2a-3723-43c9-923e-fe8b6370124f',
        name: 'snorlax',
        nationalPokedexNumber: 143,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/143.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/143.gif',
        height: 21,
        weight: 4600,
        typeOneName: 'normal',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'ou',
        baseHp: 160,
        baseAttack: 110,
        baseDefense: 65,
        baseSpattack: 65,
        baseSpdefense: 110,
        baseSpeed: 30,
        abilities: [
          {
            id: 'f59eb907-7a06-4b9d-9e78-696dbe9d93fd',
            name: 'immunity',
            shortDescription: 'Prevents poison.',
            longDescription:
              'This Pokémon cannot be poisoned.  This includes bad poison. If a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.',
          },
          {
            id: '9b91668d-2200-426a-bf07-3f8df78be3b6',
            name: 'thick-fat',
            shortDescription: 'Halves damage from fire and ice moves.',
            longDescription: 'This Pokémon takes half as much damage from fire- and ice-type moves.',
          },
        ],
      },
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 252,
      evAttack: 0,
      evDefense: 119,
      evSpAttack: 0,
      evSpDefense: 137,
      evSpeed: 0,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 2,
      gender: 'male',
      level: 75,
      happiness: 255,
      moveOneName: 'amnesia',
      moveTwoName: 'snore',
      moveThreeName: 'rest',
      moveFourName: 'body-slam',
    },
    {
      id: 'local-slot-Qi0zmV',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 3,
      name: '',
      abilityName: 'overgrow',
      pokemon: {
        id: '6d1d3325-0c44-4ea4-88b5-fd5f4342540c',
        name: 'venusaur',
        nationalPokedexNumber: 3,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/3.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/003.gif',
        height: 20,
        weight: 1000,
        typeOneName: 'grass',
        typeTwoName: 'poison',
        genders: ['male', 'female'],
        tier: 'uubl',
        baseHp: 80,
        baseAttack: 82,
        baseDefense: 83,
        baseSpattack: 100,
        baseSpdefense: 100,
        baseSpeed: 80,
        abilities: [
          {
            id: '0e958f40-87f4-43fa-a45d-1c24227f150d',
            name: 'overgrow',
            shortDescription: 'Erhöht den Schaden von grass Attacken um 50% wenn nur noch 1/3 der maximalen hp oder weniger übrig sind.',
            longDescription:
              'Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5x  so viel regular damage anrichten wie sonst.',
          },
        ],
      },
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 252,
      evAttack: 0,
      evDefense: 0,
      evSpAttack: 252,
      evSpDefense: 0,
      evSpeed: 4,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 3,
      gender: 'male',
      level: 77,
      happiness: 255,
      moveOneName: 'sunny-day',
      moveTwoName: 'giga-drain',
      moveThreeName: 'synthesis',
      moveFourName: 'solar-beam',
    },
    {
      id: 'local-slot-ePANin',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 6,
      name: '',
      abilityName: 'blaze',
      pokemon: {
        id: '6a9757fb-7b84-47d1-8cc4-c7229c1e3f3a',
        name: 'charizard',
        nationalPokedexNumber: 6,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/6.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/006.gif',
        height: 17,
        weight: 905,
        typeOneName: 'fire',
        typeTwoName: 'flying',
        genders: ['male', 'female'],
        tier: 'ou',
        baseHp: 78,
        baseAttack: 84,
        baseDefense: 78,
        baseSpattack: 109,
        baseSpdefense: 85,
        baseSpeed: 100,
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
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 0,
      evAttack: 252,
      evDefense: 0,
      evSpAttack: 4,
      evSpDefense: 0,
      evSpeed: 252,
      ivAttack: 31,
      ivDefense: 31,
      ivHp: 31,
      ivSpAttack: 31,
      ivSpDefense: 31,
      ivSpeed: 31,
      order: 4,
      gender: 'male',
      level: 77,
      happiness: 255,
      moveOneName: 'flame-thrower',
      moveTwoName: 'wing-attack',
      moveThreeName: 'slash',
      moveFourName: 'fire-spin',
    },
    {
      id: 'local-slot-WLFAbQ',
      teamId: 'local-team-D0EJpU',
      nationalPokedexNumber: 9,
      name: '',
      abilityName: 'torrent',
      pokemon: {
        id: '163146bd-b1ac-4914-bf18-73ffc79aaadb',
        name: 'blastoise',
        nationalPokedexNumber: 9,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/9.png',
        icon: 'https://www.serebii.net/pokedex-rs/icon/009.gif',
        height: 16,
        weight: 855,
        typeOneName: 'water',
        typeTwoName: 'empty',
        genders: ['male', 'female'],
        tier: 'uu',
        baseHp: 79,
        baseAttack: 83,
        baseDefense: 100,
        baseSpattack: 85,
        baseSpdefense: 105,
        baseSpeed: 78,
        abilities: [
          {
            id: 'f371d074-2a81-4ebf-ae35-da923e7ca177',
            name: 'torrent',
            shortDescription: 'Strengthens water moves to inflict 1.5x  damage at 1/3 max HP or less.',
            longDescription:
              'When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5x  as much regular damage.',
          },
        ],
      },
      natureName: 'docile',
      itemName: '',
      shiny: false,
      evHp: 252,
      evAttack: 4,
      evDefense: 252,
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
      level: 77,
      happiness: 255,
      moveOneName: 'rain-dance',
      moveTwoName: 'surf',
      moveThreeName: 'blizzard',
      moveFourName: 'skull-bash',
    },
  ],
};
