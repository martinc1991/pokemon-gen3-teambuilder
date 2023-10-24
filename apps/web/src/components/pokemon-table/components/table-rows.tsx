import type { Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TableCell, TableRow, Typography } from 'ui';
import TABLE_COLUMNS from '../columns';
import type { ColumnID } from '../columns/constants';
import { columnsConfig } from '../columns/constants';

export const TABLE_ROW_HEIGHT = 50;

interface PokemonRowProps {
  row: Row<IPokemonGetAllResponseElement>;
  start: number;
}

export function PokemonTableRow({ row, start }: PokemonRowProps): JSX.Element {
  return (
    <TableRow
      data-state={row.getIsSelected() && 'selected'}
      key={row.id}
      style={{
        // Needed for virtualization
        position: 'absolute',
        top: 0,
        left: 0,
        height: `${TABLE_ROW_HEIGHT}px`,
        transform: `translateY(${start}px)`,
        // Needed for virtualization
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      {row.getVisibleCells().map((cell) => {
        const ID = cell.getContext().column.id as ColumnID; // Had to cast just for typing
        const colFlexSize = columnsConfig[ID].colFlexSize;
        const maxWidth = columnsConfig[ID].maxWidth;
        const minWidth = columnsConfig[ID].minWidth;

        return (
          <TableCell className='flex-1 p-0 text-center' key={cell.id} style={{ flex: colFlexSize, maxWidth, minWidth }}>
            <Typography.P>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Typography.P>
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export function EmptyRow(): JSX.Element {
  return (
    <TableRow style={{ height: `${TABLE_ROW_HEIGHT}px` }}>
      <TableCell className='text-center' colSpan={TABLE_COLUMNS.length}>
        <Typography.Word>No results.</Typography.Word>
      </TableCell>
    </TableRow>
  );
}
