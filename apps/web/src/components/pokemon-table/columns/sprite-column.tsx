import { type ColumnDef } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';
import { PokemonAvatar } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const spriteColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => row.icon, {
  id: ColumnID.ICON,
  header: () => {
    return <div />;
  },
  cell: (info) => (
    <div>
      <PokemonAvatar iconUrl={info.getValue()} name={info.row.getValue('name')} />
    </div>
  ),
  enableSorting: false,
});
