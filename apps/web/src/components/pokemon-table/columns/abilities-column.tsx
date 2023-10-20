'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import TableAbilities from '../components/table-abilities';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const abilitiesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.abilities, {
  id: ColumnID.ABILITIES,
  header: () => {
    return <div>Abilities</div>;
  },
  cell: (info) => {
    return <TableAbilities abilities={info.getValue()} />;
  },
  enableSorting: false,
});
