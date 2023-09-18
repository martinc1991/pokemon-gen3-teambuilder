'use client';

import { Row, type ColumnDef } from '@tanstack/react-table';
import { IBaseStats, type IPokemonGetAllResponseElement } from 'contract';
import { TableRowStats } from '../../stats/tableRowStats';
import { columnHelper } from './getColumnHelper';

export const statsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor(
  ({ baseHp, baseAttack, baseDefense, baseSpattack, baseSpdefense, baseSpeed }) => ({
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

function getTotalBaseStatsFromRow(row: Row<IPokemonGetAllResponseElement>) {
  const stats = row.getValue('stats') as IBaseStats;
  return Object.values(stats).reduce((a, b) => a + b, 0);
}
