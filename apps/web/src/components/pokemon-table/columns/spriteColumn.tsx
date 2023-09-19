'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { PokemonIcon } from 'ui';
import { columnHelper } from './getColumnHelper';

export const spriteColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.icon, {
  id: 'sprite',
  header: () => {
    return <div />;
  },
  cell: (info) => (
    <div>
      <PokemonIcon iconUrl={info.getValue()} name={info.row.getValue('name')} priority quality={10} />
    </div>
  ),
  enableSorting: false,
});