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
  minWidth?: number;
}

type ColumnConfig = { [Property in ColumnID]: PokemonTableColumnConfig };

export const columnsConfig: ColumnConfig = {
  nationalPokedexNumber: {
    id: 'nationalPokedexNumber',
    colFlexSize: 1,
    maxWidth: 40,
    minWidth: 40,
  },
  tier: {
    id: 'tier',
    colFlexSize: 1,
    maxWidth: 50,
    minWidth: 50,
  },
  name: {
    id: 'name',
    colFlexSize: 2,
  },
  icon: {
    id: 'icon',
    colFlexSize: 1,
    maxWidth: 50,
    minWidth: 50,
  },
  types: {
    id: 'types',
    colFlexSize: 2,
  },
  stats: {
    id: 'stats',
    colFlexSize: 2,
    minWidth: 240,
  },
  abilities: {
    id: 'abilities',
    colFlexSize: 2,
    minWidth: 160,
  },
  genders: {
    id: 'genders',
    colFlexSize: 1,
  },
  height: {
    id: 'height',
    colFlexSize: 1,
    maxWidth: 80,
  },
  weight: {
    id: 'weight',
    colFlexSize: 1,
    maxWidth: 80,
  },
  actions: {
    id: 'actions',
    colFlexSize: 1,
    maxWidth: 35,
    minWidth: 35,
  },
};
