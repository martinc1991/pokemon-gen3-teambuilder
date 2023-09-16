import type { HeaderGroup, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
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
        return (
          <TableHead className='flex items-center justify-center' style={{ flex: colFlexSize, maxWidth: maxWidth }} key={key}>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        );
      })}
    </TableRow>
  );
}
