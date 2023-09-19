import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { IPokemonGetAllResponse } from 'contract';
import { useRef, useState } from 'react';
import { Table, TableBody } from 'ui';
import TABLE_COLUMNS from './columns/index';
import { PokemonTableHeader } from './components/table-header';
import { EmptyRow, PokemonTableRow } from './components/table-rows';

interface PokemonTableProps {
  pokemon: IPokemonGetAllResponse;
}

export function PokemonTable({ pokemon }: PokemonTableProps): JSX.Element {
  const parentRef = useRef(null);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: pokemon,
    columns: TABLE_COLUMNS,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    manualPagination: true,
  });

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 10,
  });

  return (
    <div className='w-11/12 border rounded-md h-[800px] overflow-auto' ref={parentRef}>
      <Table>
        <PokemonTableHeader table={table} />
        <TableBody
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '600px',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().length ? (
            rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index];
              return <PokemonTableRow key={row.id} row={row} size={virtualRow.size} start={virtualRow.start} />;
            })
          ) : (
            <EmptyRow />
          )}
        </TableBody>
      </Table>
    </div>
  );
}
