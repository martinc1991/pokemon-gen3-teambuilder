'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { TypeBadge } from 'ui';
import { columnHelper } from './getColumnHelper';

export const typesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => [row.typeOneName, row.typeTwoName], {
  id: 'types',
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
});
