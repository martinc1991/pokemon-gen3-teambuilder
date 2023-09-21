'use client';

import type { ColumnDef, Row } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { getValues } from '../../../utils/common';
import { TableRowStats } from '../../stats/table-row-stats';
import { columnHelper } from './get-column-helper';

interface StatsType {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
}

export const statsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor(
  ({ baseHp, baseAttack, baseDefense, baseSpattack, baseSpdefense, baseSpeed }): StatsType => ({
    baseHp,
    baseAttack,
    baseDefense,
    baseSpattack,
    baseSpdefense,
    baseSpeed,
  }),
  {
    id: 'stats',
    header: () => {
      return <div>Base Stats</div>;
    },
    cell: (info) => {
      const stats = info.getValue();
      return <TableRowStats stats={stats} />;
    },
    sortingFn: (rowA, rowB) => getTotalBaseStatsFromRow(rowA) - getTotalBaseStatsFromRow(rowB),
  }
);

function getTotalBaseStatsFromRow(row: Row<IPokemonGetAllResponseElement>): number {
  const stats = row.getValue<StatsType>('stats');
  return getValues(stats).reduce((a, b) => a + b, 0);
}
