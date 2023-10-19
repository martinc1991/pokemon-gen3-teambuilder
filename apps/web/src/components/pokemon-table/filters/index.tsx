import type { Table } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { TypeFilters } from './type-filter';

interface FilterProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function Filters({ table }: FilterProps): JSX.Element {
  return (
    <div className='flex gap-4'>
      <TypeFilters table={table} />
    </div>
  );
}
