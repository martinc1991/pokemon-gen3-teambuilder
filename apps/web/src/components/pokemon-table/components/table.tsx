import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { Table, TableBody, Typography } from 'ui';
import LoadingState from '../../loading-state';
import { Filters } from '../filters';
import { usePokemonTableConfig } from '../hooks/use-pokemon-table-config';
import { usePokemonTableHeight } from '../hooks/use-pokemon-table-height';
import { usePokemonTableInfo } from '../hooks/use-pokemon-table-info';
import { PokemonTableHeader } from './table-header';
import { EmptyRow, PokemonTableRow, TABLE_ROW_HEIGHT } from './table-rows';

export function TableContent(): JSX.Element {
  const tableContainerRef = useRef(null);

  const { flatData, isError, fetchStatus, isFetchingNextPage, isLoading } = usePokemonTableInfo();

  const table = usePokemonTableConfig(flatData);
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => TABLE_ROW_HEIGHT,
    overscan: 10,
  });

  const RENDERED_ROWS_NUM = rowVirtualizer.getVirtualItems().length;
  const tableHeight = usePokemonTableHeight(RENDERED_ROWS_NUM);

  if ((fetchStatus === 'fetching' && !isFetchingNextPage) || isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className='w-full flex flex-col'>
      <div>
        <Filters table={table} />
      </div>
      <PokemonTableHeader table={table} />
      <div className='overflow-auto border rounded-md' ref={tableContainerRef} style={{ height: tableHeight }}>
        <Table>
          <TableBody style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: '600px', position: 'relative' }}>
            {RENDERED_ROWS_NUM ? (
              rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const row = rows[virtualRow.index];
                return <PokemonTableRow key={row.id} row={row} start={virtualRow.start} />;
              })
            ) : (
              <EmptyRow />
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
