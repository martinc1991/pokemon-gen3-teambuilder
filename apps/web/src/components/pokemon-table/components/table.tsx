import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { Table, TableBody, Typography } from 'ui';
import { useWindowSize } from 'usehooks-ts';
import { BUILDER_PAGE_HEADER_HEIGHT } from '../../../app/builder/constants';
import LoadingState from '../../loading-state';
import { Filters } from '../filters';
import { usePokemonTableConfig } from '../hooks/use-pokemon-table-config';
import { usePokemonTableInfo } from '../hooks/use-pokemon-table-info';
import { PokemonTableHeader } from './table-header';
import { EmptyRow, PokemonTableRow } from './table-rows';

export function TableContent(): JSX.Element {
  const tableContainerRef = useRef(null);

  const { height } = useWindowSize();
  const tableHeigth = height - BUILDER_PAGE_HEADER_HEIGHT - 20;

  const { flatData, isError, fetchStatus, isFetchingNextPage, isLoading } = usePokemonTableInfo();

  const table = usePokemonTableConfig(flatData);
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 50,
    overscan: 10,
  });

  if ((fetchStatus === 'fetching' && !isFetchingNextPage) || isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className='w-11/12 flex flex-col gap-4'>
      <Filters table={table} />
      {/* TODO: make table height adaptable to account for filters (and title and subtitle) height */}
      <div className='overflow-auto border rounded-md' ref={tableContainerRef} style={{ height: tableHeigth }}>
        <Table>
          <PokemonTableHeader table={table} />
          <TableBody style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: '600px', position: 'relative' }}>
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
    </div>
  );
}
