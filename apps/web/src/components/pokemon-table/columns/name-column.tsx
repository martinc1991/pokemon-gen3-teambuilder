'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { Typography } from 'ui';
import { formatPokemonName } from '../../../utils/pokemon';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const nameColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('name', {
  id: ColumnID.NAME,
  header: () => {
    return <div>Name</div>;
  },
  cell: (info) => <Typography.Word className='font-medium'>{formatPokemonName(info.getValue())}</Typography.Word>,
});
