import type { HeaderGroup, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TableHead, TableHeader, TableRow } from 'ui';

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
        return (
          <TableHead className='flex items-center justify-center flex-1' key={key}>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        );
      })}
    </TableRow>
  );
}
