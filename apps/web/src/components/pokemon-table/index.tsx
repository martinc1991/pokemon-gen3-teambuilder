import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef, useState } from 'react';
import { Table, TableBody, Typography } from 'ui';
import { useMediaQuery, useWindowSize } from 'usehooks-ts';
import { BUILDER_PAGE_HEADER_HEIGHT } from '../../app/builder/constants';
import LoadingState from '../loading-state';
import TABLE_COLUMNS from './columns/index';
import { PokemonTableHeader } from './components/table-header';
import { EmptyRow, PokemonTableRow } from './components/table-rows';
import { useGetPokemonTable } from './hooks/useGetPokemonTable';

export function PokemonTable(): JSX.Element {
  const parentRef = useRef(null);
  const moreThan1500 = useMediaQuery('(min-width: 1500px)');
  const moreThan1200 = useMediaQuery('(min-width: 1200px)');
  const moreThan1000 = useMediaQuery('(min-width: 1000px)');
  const { height } = useWindowSize();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { isLoading, data, hasNextPage, fetchNextPage, isError, fetchStatus } = useGetPokemonTable();

  useEffect(() => {
    // Whenever fetching a batch finishes, load next one
    if (fetchStatus === 'idle' && hasNextPage) void fetchNextPage();
  }, [fetchStatus, hasNextPage]);

  const pokemon = data?.pages.flatMap((page) => page.body) || [];

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

  useEffect(() => {
    table.setColumnVisibility({
      height: moreThan1500,
      weight: moreThan1500,
      genders: moreThan1500,
      icon: moreThan1200,
      nationalPokedexNumber: moreThan1200,
      abilities: moreThan1000,
    });
  }, [moreThan1500, moreThan1200, moreThan1000]);

  const tableHeigth = height - BUILDER_PAGE_HEADER_HEIGHT - 20;

  if (isLoading) return <LoadingState />;
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className='w-11/12 overflow-auto border rounded-md' ref={parentRef} style={{ height: tableHeigth }}>
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
