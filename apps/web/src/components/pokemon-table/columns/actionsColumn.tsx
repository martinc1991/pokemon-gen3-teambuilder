'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import RowDropdownMenu from '../components/dropdown-menu';
import { columnHelper } from './getColumnHelper';

export const actionsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row, {
  id: 'actions',
  enableHiding: false,
  header: () => <div />,
  cell: (info) => {
    return <RowDropdownMenu pokemon={info.cell.getValue()} />;
  },
  enableSorting: false,
});
