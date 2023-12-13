'use client';

import type { ColumnDef, Row } from '@tanstack/react-table';
import { getValues } from '@utils/common';
import type { PokemonWithAbilities } from 'contract';
import { TableRowStats } from '../../stats/table-row-stats';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

interface StatsType {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
}

export const statsColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor(
  ({ baseHp, baseAttack, baseDefense, baseSpattack, baseSpdefense, baseSpeed }): StatsType => ({
    baseHp,
    baseAttack,
    baseDefense,
    baseSpattack,
    baseSpdefense,
    baseSpeed,
  }),
  {
    id: ColumnID.STATS,
    header: () => {
      return <div>Base Stats</div>;
    },
    cell: (info) => {
      const stats = info.getValue();
      return <TableRowStats stats={stats} />;
    },
    sortingFn: (rowA, rowB) => getTotalBaseStatsFromRow(rowA) - getTotalBaseStatsFromRow(rowB),
  },
);

function getTotalBaseStatsFromRow(row: Row<PokemonWithAbilities>): number {
  const stats = row.getValue<StatsType>('stats');
  return getValues(stats).reduce((a, b) => a + b, 0);
}
