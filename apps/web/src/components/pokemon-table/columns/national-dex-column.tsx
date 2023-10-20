'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { Typography } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const nationalDexColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('nationalPokedexNumber', {
  id: ColumnID.NATIONALPOKEDEXNUMBER,
  header: () => <div>#</div>,
  cell: (info) => <Typography.Muted>{info.getValue()}</Typography.Muted>,
});
