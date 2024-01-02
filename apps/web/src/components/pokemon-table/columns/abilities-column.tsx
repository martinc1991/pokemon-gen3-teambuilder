'use client';

import { type ColumnDef } from '@tanstack/react-table';
import type { Ability, PokemonWithAbilities } from 'contract';
import { replaceHyphensWithSpaces } from 'utils';
import TableAbilities from '../components/table-abilities';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const abilitiesColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => row.abilities, {
  id: ColumnID.ABILITIES,
  header: () => {
    return <div>Abilities</div>;
  },
  cell: (info) => {
    return <TableAbilities abilities={info.getValue()} />;
  },
  enableSorting: false,
  filterFn: (row, columnId, filterValue) => {
    if (typeof filterValue === 'string') {
      const value = filterValue.toLowerCase().trim();
      const abilitiesArr = row.getValue<Ability[]>(columnId);

      // Abilities names come in kebab-case
      const abilities = abilitiesArr.map(({ name }) => replaceHyphensWithSpaces(name).toLocaleLowerCase()).join(' ');

      return abilities.includes(value);
    }
    return true;
  },
});
