import { type ColumnDef } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';
import { GendersText } from '../components/genders-text';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const gendersColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => row.genders, {
  id: ColumnID.GENDERS,
  header: () => {
    return <div>Genders</div>;
  },
  cell: (info) => (
    <div className='flex justify-center'>
      <GendersText genders={info.getValue()} />
    </div>
  ),
  enableSorting: false,
});
