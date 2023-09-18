'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { Typography } from 'ui';
import { columnHelper } from './getColumnHelper';

export const heightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.height / 10, {
  id: 'height',
  header: () => {
    return <div>Height</div>;
  },
  cell: (info) => (
    <div className='flex justify-center gap-1'>
      <Typography.Small>{info.getValue().toFixed(1)}</Typography.Small>
      <Typography.Muted>m</Typography.Muted>
    </div>
  ),
});
