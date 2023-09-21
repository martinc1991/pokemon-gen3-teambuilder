'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import TableAbilities from '../components/table-abilities';
import { columnHelper } from './get-column-helper';

export const abilitiesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.abilities, {
  id: 'abilities',
  header: () => {
    return <div>Abilities</div>;
  },
  cell: (info) => {
    return <TableAbilities abilities={info.getValue()} />;
  },
  enableSorting: false,
});
