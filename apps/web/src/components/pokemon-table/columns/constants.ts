export const enum ColumnID {
  NATIONALPOKEDEXNUMBER = 'nationalPokedexNumber',
  TIER = 'tier',
  NAME = 'name',
  ICON = 'icon',
  TYPES = 'types',
  STATS = 'stats',
  ABILITIES = 'abilities',
  GENDERS = 'genders',
  HEIGHT = 'height',
  WEIGHT = 'weight',
  ACTIONS = 'actions',
}

interface PokemonTableColumnConfig {
  id: ColumnID;
  colFlexSize: number;
  maxWidth?: number;
  minWidth?: number;
}

type ColumnConfig = { [Property in ColumnID]: PokemonTableColumnConfig };

export const columnsConfig: ColumnConfig = {
  nationalPokedexNumber: {
    id: ColumnID.NATIONALPOKEDEXNUMBER,
    colFlexSize: 1,
    maxWidth: 40,
    minWidth: 40,
  },
  tier: {
    id: ColumnID.TIER,
    colFlexSize: 1,
    maxWidth: 50,
    minWidth: 50,
  },
  name: {
    id: ColumnID.NAME,
    colFlexSize: 2,
  },
  icon: {
    id: ColumnID.ICON,
    colFlexSize: 1,
    maxWidth: 50,
    minWidth: 50,
  },
  types: {
    id: ColumnID.TYPES,
    colFlexSize: 2,
  },
  stats: {
    id: ColumnID.STATS,
    colFlexSize: 2,
    minWidth: 240,
  },
  abilities: {
    id: ColumnID.ABILITIES,
    colFlexSize: 2,
    minWidth: 160,
  },
  genders: {
    id: ColumnID.GENDERS,
    colFlexSize: 1,
  },
  height: {
    id: ColumnID.HEIGHT,
    colFlexSize: 1,
    maxWidth: 80,
  },
  weight: {
    id: ColumnID.WEIGHT,
    colFlexSize: 1,
    maxWidth: 80,
  },
  actions: {
    id: ColumnID.ACTIONS,
    colFlexSize: 1,
    maxWidth: 35,
    minWidth: 35,
  },
};
