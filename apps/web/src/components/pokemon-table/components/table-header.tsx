import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import type { HeaderGroup, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TableHead, TableHeader, TableRow } from 'ui';
import { ColumnID, columnsConfig } from './constants';

interface PokemonTableHeaderProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function PokemonTableHeader({ table }: PokemonTableHeaderProps): JSX.Element {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <PokemonHeaderRow headerGroup={headerGroup} key={headerGroup.id} />
      ))}
    </TableHeader>
  );
}

interface PokemonHeaderRowProps {
  headerGroup: HeaderGroup<IPokemonGetAllResponseElement>;
  key: string;
}

function PokemonHeaderRow({ headerGroup, key }: PokemonHeaderRowProps): JSX.Element {
  return (
    <TableRow className='flex hover:bg-transparent' key={headerGroup.id}>
      {headerGroup.headers.map((header) => {
        const ID = header.getContext().header.id as ColumnID; // Had to cast just for typing
        const colFlexSize = columnsConfig[ID].colFlexSize;
        const maxWidth = columnsConfig[ID].maxWidth;

        const text = flexRender(header.column.columnDef.header, header.getContext());
        const sort = header.column.getIsSorted();
        const canSort = header.column.getCanSort();

        return (
          <TableHead
            className='flex items-center justify-center gap-1'
            style={{ flex: colFlexSize, maxWidth: maxWidth }}
            key={key}
            onClick={header.column.getToggleSortingHandler()}
          >
            {canSort && <div className='flex-1' />}
            <div
              className={clsx(
                'flex justify-center flex-3 ',
                canSort ? 'cursor-pointer hover:underline underline-offset-4' : 'cursor-default'
              )}
            >
              {text}
            </div>
            {canSort && (
              <div className='flex-1'>
                {sort === 'asc' && <ArrowUpIcon />} {sort === 'desc' && <ArrowDownIcon />}
              </div>
            )}
          </TableHead>
        );
      })}
    </TableRow>
  );
}
