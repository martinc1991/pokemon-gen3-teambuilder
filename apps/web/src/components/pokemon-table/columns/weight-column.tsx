'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';
import { Typography } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const weightColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => row.weight / 10, {
  id: ColumnID.WEIGHT,
  header: () => {
    return <div>Weight</div>;
  },
  cell: (info) => (
    <div className='flex justify-center gap-1'>
      <Typography.Small>{info.getValue().toFixed(1)}</Typography.Small>
      <Typography.Muted>kg</Typography.Muted>
    </div>
  ),
});
