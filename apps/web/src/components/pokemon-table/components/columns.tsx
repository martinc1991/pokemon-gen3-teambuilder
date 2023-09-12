'use client';

import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { Typography } from 'ui';
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

// TODO: add pokemon icons
const spriteColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.sprite, {
  id: 'sprite',
  header: () => {
    return <div />;
  },
  cell: 'to-do',
  // cell: (info) => info.getValue().slice(0, 8),
});

// TODO: add types badges
const typesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => [row.typeOneName, row.typeTwoName], {
  id: 'types',
  header: () => {
    return <div>Type</div>;
  },
  cell: (info) => info.getValue().join(' - '),
});

const gendersColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('genders', {
  id: 'genders',
  header: () => {
    return <div>Genders</div>;
  },
  cell: (info) => info.getValue().join(' - '),
});

const heightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('height', {
  id: 'height',
  header: () => {
    return <div>Height (m)</div>;
  },
  cell: (info) => info.getValue() / 10,
});

const weightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('weight', {
  id: 'weight',
  header: () => {
    return <div>Weight (kg)</div>;
  },
  cell: (info) => info.getValue() / 10,
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
