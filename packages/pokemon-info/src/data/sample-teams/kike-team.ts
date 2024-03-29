import { JSONTeam, DEFAULT_IVS, DEFAULT_EVS } from 'contract';

export const KIKE_TEAM: JSONTeam = {
  id: 'sample-team-kike',
  userName: 'Kike',
  name: 'Initial team',
  description: 'Put together 5 minutes into the game.',
  isSample: true,
  isPublic: true,
  slots: [
    {
      species: 'torchic',
      nationalPokedexNumber: 255,
      nickname: '',
      abilityName: 'blaze',
      natureName: 'hasty',
      itemName: null,
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 11,
      happiness: 255,
      moves: ['ember', 'scratch', 'growl'],
    },
    {
      species: 'zigzagoon',
      nationalPokedexNumber: 263,
      nickname: '',
      abilityName: 'pickup',
      natureName: 'careful',
      itemName: 'master-ball',
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 3,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
    {
      species: 'zigzagoon',
      nationalPokedexNumber: 263,
      nickname: '',
      abilityName: 'pickup',
      natureName: 'docile',
      itemName: 'twisted-spoon',
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'female',
      level: 3,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
    {
      species: 'zigzagoon',
      nationalPokedexNumber: 263,
      nickname: '',
      abilityName: 'pickup',
      natureName: 'docile',
      itemName: 'thick-club',
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 3,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
    {
      species: 'zigzagoon',
      nationalPokedexNumber: 263,
      nickname: '',
      abilityName: 'pickup',
      natureName: 'docile',
      itemName: 'up-grade',
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 3,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
    {
      species: 'zigzagoon',
      nationalPokedexNumber: 263,
      nickname: '',
      abilityName: 'pickup',
      natureName: 'docile',
      itemName: 'leftovers',
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 2,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
  ],
};
