'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
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
      const s = info.getValue();
      const stats = {
        hp: s.baseHp,
        attack: s.baseAttack,
        defense: s.baseDefense,
        spattack: s.baseSpattack,
        spdefense: s.baseSpdefense,
        speed: s.baseSpeed,
      };
      return <TableRowStats stats={stats} />;
    },
    enableSorting: false, // TODO: add sorting capacity based on BST
  }
);
