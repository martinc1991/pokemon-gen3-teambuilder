import { IPokemon } from 'contract';

export type ColumnID =
  | keyof Omit<
      IPokemon,
      | 'typeOneName'
      | 'typeTwoName'
      | 'id'
      | 'baseHp'
      | 'baseAttack'
      | 'baseDefense'
      | 'baseSpattack'
      | 'baseSpdefense'
      | 'baseSpeed'
      | 'sprite'
    >
  | 'types'
  | 'stats'
  | 'abilities'
  | 'actions';

interface PokemonTableColumnConfig {
  id: ColumnID;
  colFlexSize: number;
  maxWidth?: number;
}

type ColumnConfig = { [Property in ColumnID]: PokemonTableColumnConfig };

export const columnsConfig: ColumnConfig = {
  nationalPokedexNumber: {
    id: 'nationalPokedexNumber',
    colFlexSize: 1,
    maxWidth: 80,
  },
  tier: {
    id: 'tier',
    colFlexSize: 1,
    maxWidth: 100,
  },
  name: {
    id: 'name',
    colFlexSize: 2,
  },
  icon: {
    id: 'icon',
    colFlexSize: 1,
    maxWidth: 50,
  },
  types: {
    id: 'types',
    colFlexSize: 2,
    maxWidth: 190,
  },
  stats: {
    id: 'stats',
    colFlexSize: 2,
    maxWidth: 240,
  },
  abilities: {
    id: 'abilities',
    colFlexSize: 2,
  },
  genders: {
    id: 'genders',
    colFlexSize: 1,
  },
  height: {
    id: 'height',
    colFlexSize: 1,
    maxWidth: 110,
  },
  weight: {
    id: 'weight',
    colFlexSize: 1,
    maxWidth: 110,
  },
  actions: {
    id: 'actions',
    colFlexSize: 1,
    maxWidth: 50,
  },
};
