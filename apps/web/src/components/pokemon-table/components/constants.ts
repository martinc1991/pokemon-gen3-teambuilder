import { IPokemon } from 'contract';

export type ColumnID =
  | keyof Omit<
      IPokemon,
      'typeOneName' | 'typeTwoName' | 'id' | 'baseHp' | 'baseAttack' | 'baseDefense' | 'baseSpattack' | 'baseSpdefense' | 'baseSpeed'
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
    maxWidth: 50,
  },
  tier: {
    id: 'tier',
    colFlexSize: 1,
    maxWidth: 70,
  },
  name: {
    id: 'name',
    colFlexSize: 1,
  },
  sprite: {
    id: 'sprite',
    colFlexSize: 1,
    maxWidth: 50,
  },
  types: {
    id: 'types',
    colFlexSize: 2,
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
    maxWidth: 50,
  },
};
