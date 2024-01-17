import { type ColumnDef } from '@tanstack/react-table';
import type { PokemonWithAbilities } from 'contract';
import { TypeBadge } from 'ui';
import { ColumnID } from './constants';
import { columnHelper } from './get-column-helper';

export const typesColumn: ColumnDef<PokemonWithAbilities> = columnHelper.accessor((row) => [row.typeOneName, row.typeTwoName], {
  id: ColumnID.TYPES,
  header: () => {
    return <div>Type</div>;
  },
  cell: (info) => {
    const [typeOne, typeTwo] = info.getValue();
    return (
      <div className='flex flex-row justify-center gap-3'>
        <TypeBadge type={typeOne} />
        {typeTwo !== 'empty' && <TypeBadge type={typeTwo} />}
      </div>
    );
  },
  filterFn: 'arrIncludesAll',
});
