import type { Table } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { NameFilter } from './name-filter';
import { TierFilter } from './tier-filter';
import { TypesFilter } from './types-filter';
import { AbilitiesFilter } from './abilities-filter';

export const TABLE_FILTERS_HEIGHT = 40;

interface FilterProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function Filters({ table }: FilterProps): JSX.Element {
  return (
    <div className='flex flex-row items-center gap-4' style={{ height: TABLE_FILTERS_HEIGHT }}>
      <NameFilter table={table} />
      <AbilitiesFilter table={table} />
      <TierFilter table={table} />
      <TypesFilter table={table} />
    </div>
  );
}
