import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import type { HeaderGroup, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import type { PokemonWithAbilities } from 'contract';
import { TableHead, TableHeader, TableRow } from 'ui';
import type { ColumnID } from '../columns/constants';
import { columnsConfig } from '../columns/constants';

export const TABLE_HEADER_HEIGHT = 40;

interface PokemonTableHeaderProps {
  table: Table<PokemonWithAbilities>;
}

export function PokemonTableHeader({ table }: PokemonTableHeaderProps): JSX.Element {
  return (
    <TableHeader style={{ height: TABLE_HEADER_HEIGHT, marginRight: 1, marginLeft: 1 }}>
      {table.getHeaderGroups().map((headerGroup) => (
        <PokemonHeaderRow headerGroup={headerGroup} key={headerGroup.id} />
      ))}
    </TableHeader>
  );
}

interface PokemonHeaderRowProps {
  headerGroup: HeaderGroup<PokemonWithAbilities>;
}

function PokemonHeaderRow({ headerGroup }: PokemonHeaderRowProps): JSX.Element {
  return (
    <TableRow className='flex hover:bg-transparent' key={headerGroup.id} style={{ marginRight: 5 }}>
      {headerGroup.headers.map((header) => {
        const ID = header.getContext().header.id as ColumnID; // Had to cast just for typing
        const colFlexSize = columnsConfig[ID].colFlexSize;
        const maxWidth = columnsConfig[ID].maxWidth;
        const minWidth = columnsConfig[ID].minWidth;

        const text = flexRender(header.column.columnDef.header, header.getContext());
        const sort = header.column.getIsSorted();
        const canSort = header.column.getCanSort();

        return (
          <TableHead
            className='flex items-center justify-center gap-1'
            key={header.id}
            onClick={header.column.getToggleSortingHandler()}
            style={{ flex: colFlexSize, maxWidth, minWidth }}
          >
            {canSort ? <div className='flex-1' /> : null}
            <div
              className={clsx(
                'flex justify-center flex-3 ',
                canSort ? 'cursor-pointer hover:underline underline-offset-4' : 'cursor-default',
              )}
            >
              {text}
            </div>
            {canSort ? (
              <div className='flex-1'>
                {sort === 'asc' && <ArrowUpIcon />} {sort === 'desc' && <ArrowDownIcon />}
              </div>
            ) : null}
          </TableHead>
        );
      })}
    </TableRow>
  );
}
