'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { replaceHyphensWithSpaces } from '@utils/common';
import { formatPokemonName } from '@utils/pokemon';
import { type PokemonWithAbilities } from 'contract';
import { Typography } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const nameColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor('name', {
  id: ColumnID.NAME,
  header: () => {
    return <div>Name</div>;
  },
  cell: (info) => <Typography.Word className='font-medium'>{formatPokemonName(info.getValue())}</Typography.Word>,
  filterFn: (row, columnId, filterValue) => {
    if (typeof filterValue === 'string') {
      const value = filterValue.toLowerCase().trim();

      // Names come in kebab-case
      const name = replaceHyphensWithSpaces(row.getValue<string>(columnId));

      return name.includes(value);
    }
    return true;
  },
});
