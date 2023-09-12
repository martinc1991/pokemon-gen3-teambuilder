import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import type { IPokemonGetAllResponse } from 'contract';
import { useState } from 'react';
import { Table } from 'ui';
import { columns } from './components/columns';
import { PokemonTableBody } from './components/table-body';
import { PokemonTableHeader } from './components/table-header';

interface PokemonTableProps {
  pokemon: IPokemonGetAllResponse;
}

export function PokemonTable({ pokemon }: PokemonTableProps): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: pokemon,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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

  return (
    <div className='w-full'>
      <div className='border rounded-md'>
        <Table>
          <PokemonTableHeader table={table} />
          <PokemonTableBody table={table} />
        </Table>
      </div>
    </div>
  );
}
