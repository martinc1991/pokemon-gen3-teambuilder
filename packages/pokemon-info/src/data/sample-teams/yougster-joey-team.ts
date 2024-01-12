import { DEFAULT_IVS, JSONTeam } from 'contract';

export const YOUNGTER_JOEY_TEAM: JSONTeam = {
  id: 'sample-team-youngster-joey',
  userName: 'Youngster Joey',
  name: 'Rattata rules',
  description: 'My Rattata is in the top percentage of all Rattata.',
  isSample: true,
  isPublic: true,
  slots: [
    {
      species: 'rattata',
      nationalPokedexNumber: 19,
      nickname: '',
      abilityName: 'run-away',
      natureName: 'docile',
      itemName: null,
      shiny: false,
      evs: { hp: 0, atk: 9, def: 0, spa: 0, spd: 0, spe: 10 },
      ivs: DEFAULT_IVS,
      gender: 'male',
      level: 4,
      happiness: 255,
      moves: ['tackle', 'tail-whip'],
    },
  ],
};
