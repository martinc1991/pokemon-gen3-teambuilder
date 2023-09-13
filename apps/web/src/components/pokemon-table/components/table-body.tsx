import type { Row, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TableBody, TableCell, TableRow, Typography } from 'ui';
import { columns } from './columns';

interface PokemonTableBodyProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function PokemonTableBody({ table }: PokemonTableBodyProps): JSX.Element {
  return (
    <TableBody>
      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map((row) => {
          return <PokemonRow key={row.id} row={row} />;
        })
      ) : (
        <EmptyRow />
      )}
    </TableBody>
  );
}

interface PokemonRowProps {
  row: Row<IPokemonGetAllResponseElement>;
  key: string;
}

export function PokemonRow({ row, key }: PokemonRowProps): JSX.Element {
  return (
    <TableRow data-state={row.getIsSelected() && 'selected'} key={key}>
      {row.getVisibleCells().map((cell) => {
        return (
          <TableCell className='text-center' key={cell.id}>
            <Typography.P>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Typography.P>
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export function EmptyRow(): JSX.Element {
  return (
    <TableRow>
      <TableCell className='h-24 text-center' colSpan={columns.length}>
        No results.
      </TableCell>
    </TableRow>
  );
}
