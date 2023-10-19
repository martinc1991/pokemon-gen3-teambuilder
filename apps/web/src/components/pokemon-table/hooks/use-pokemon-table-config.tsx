import type { ColumnFiltersState, SortingState, Table, VisibilityState } from '@tanstack/react-table';
import { getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import type { IPokemonGetAllResponse, IPokemonGetAllResponseElement } from 'contract';
import { useEffect, useState } from 'react';
import TABLE_COLUMNS from '../columns';
import { usePokemonTableMediaQueries } from './use-pokemon-table-media-queries';

type Props = IPokemonGetAllResponse;

export function usePokemonTableConfig(data: Props): Table<IPokemonGetAllResponseElement> {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { moreThan1500, moreThan1200, moreThan1000 } = usePokemonTableMediaQueries();

  const table = useReactTable({
    data,
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

  useEffect(() => {
    table.setColumnVisibility({
      height: moreThan1500,
      weight: moreThan1500,
      genders: moreThan1500,
      icon: moreThan1200,
      nationalPokedexNumber: moreThan1200,
      abilities: moreThan1000,
    });
  }, [moreThan1500, moreThan1200, moreThan1000, table]);

  return table;
}
