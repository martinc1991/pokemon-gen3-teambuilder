import { type ColumnDef } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';
import { Typography } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const heightColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => row.height / 10, {
  id: ColumnID.HEIGHT,
  header: () => {
    return <div>Height</div>;
  },
  cell: (info) => (
    <div className='flex justify-center gap-1'>
      <Typography.Small>{info.getValue().toFixed(1)}</Typography.Small>
      <Typography.Muted>m</Typography.Muted>
    </div>
  ),
});
