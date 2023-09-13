'use client';

import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { PokemonIcon, Typography } from 'ui';
import RowDropdownMenu from './dropdown-menu';

const columnHelper = createColumnHelper<IPokemonGetAllResponseElement>();

const nationalDexColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('nationalPokedexNumber', {
  id: 'nationalPokedexNumber',
  header: '#',
  cell: ({ row }) => <div className='capitalize'>{row.getValue('nationalPokedexNumber')}</div>,
});

const nameColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('name', {
  id: 'name',
  header: () => {
    return <div>Name</div>;
  },
  cell: ({ row }) => <Typography.P>{row.getValue('name')}</Typography.P>,
});

const spriteColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.nationalPokedexNumber, {
  id: 'sprite',
  header: () => {
    return <div />;
  },
  cell: (info) => (
    <div>
      <PokemonIcon inputId={info.getValue()} name={info.row.getValue('name')} />
    </div>
  ),
});

// TODO: add types badges
const typesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor(
  (row) => [row.typeOneName, row.typeTwoName].join(' - '),
  {
    id: 'types',
    header: () => {
      return <div>Type</div>;
    },
    cell: (info) => info.getValue(),
  }
);

const gendersColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.genders.join(' - '), {
  id: 'genders',
  header: () => {
    return <div>Genders</div>;
  },
  cell: (info) => info.getValue(),
});

const heightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.height / 10, {
  id: 'height',
  header: () => {
    return <div>Height (m)</div>;
  },
  cell: (info) => info.getValue(),
});

const weightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.weight / 10, {
  id: 'weight',
  header: () => {
    return <div>Weight (kg)</div>;
  },
  cell: (info) => info.getValue(),
});

const actionsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.display({
  id: 'actions',
  enableHiding: false,
  header: () => <div />,
  cell: () => {
    return <RowDropdownMenu />;
  },
});

export const columns: ColumnDef<IPokemonGetAllResponseElement>[] = [
  nationalDexColumn,
  nameColumn,
  spriteColumn,
  typesColumn,
  gendersColumn,
  heightColumn,
  weightColumn,
  actionsColumn,
];
