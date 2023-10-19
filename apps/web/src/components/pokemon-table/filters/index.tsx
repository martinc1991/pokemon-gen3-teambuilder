import type { Table } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TypeFilters } from './type-filter';

export const TABLE_FILTERS_HEIGHT = 40;

interface FilterProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function Filters({ table }: FilterProps): JSX.Element {
  return (
    <div className='flex gap-4' style={{ height: TABLE_FILTERS_HEIGHT }}>
      <TypeFilters table={table} />
    </div>
  );
}
