import { DEFAULT_EVS, DEFAULT_IVS, JSONTeam } from 'contract';

export const WHITNEY_TEAM: JSONTeam = {
  id: 'sample-team-whitney',
  userName: 'Whitney',
  name: 'Happy Nightmare',
  description: 'This is why most people stopped playing pokemon.',
  isSample: true,
  isPublic: true,
  slots: [
    {
      species: 'clefairy',
      nationalPokedexNumber: 35,
      nickname: '',
      abilityName: 'cute-charm',
      natureName: 'docile',
      itemName: null,
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'female',
      level: 18,
      happiness: 255,
      moves: ['encore', 'mimic', 'double-slap', 'metronome'],
    },
    {
      species: 'miltank',
      nationalPokedexNumber: 241,
      nickname: '',
      abilityName: 'thick-fat',
      natureName: 'docile',
      itemName: null,
      shiny: false,
      evs: DEFAULT_EVS,
      ivs: DEFAULT_IVS,
      gender: 'female',
      level: 20,
      happiness: 255,
      moves: ['stomp', 'attract', 'milk-drink', 'rollout'],
    },
  ],
};
