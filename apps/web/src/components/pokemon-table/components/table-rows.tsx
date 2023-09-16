import type { Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TableCell, TableRow, Typography } from 'ui';
import { columns } from './columns';
import { ColumnID, columnsConfig } from './constants';

interface PokemonRowProps {
  row: Row<IPokemonGetAllResponseElement>;
  key: string;
  size: number;
  start: number;
}

export function PokemonTableRow({ row, key, size, start }: PokemonRowProps): JSX.Element {
  return (
    <TableRow
      data-state={row.getIsSelected() && 'selected'}
      key={key}
      style={{
        // Needed for virtualization
        position: 'absolute',
        top: 0,
        left: 0,
        height: `${size}px`,
        transform: `translateY(${start}px)`,
        // Needed for virtualization
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {row.getVisibleCells().map((cell) => {
        const ID = cell.getContext().column.id as ColumnID; // Had to cast just for typing
        const colFlexSize = columnsConfig[ID].colFlexSize;
        const maxWidth = columnsConfig[ID].maxWidth;
        return (
          <TableCell className='flex-1 text-center' key={cell.id} style={{ flex: colFlexSize, maxWidth: maxWidth }}>
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