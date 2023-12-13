import type { Table } from '@tanstack/react-table';
import type { PokemonWithAbilities } from 'contract';
import { AbilitiesFilter } from './abilities-filter';
import { NameFilter } from './name-filter';
import { TierFilter } from './tier-filter';
import { TypesFilter } from './types-filter';

export const TABLE_FILTERS_HEIGHT = 40;

interface FilterProps {
  table: Table<PokemonWithAbilities>;
}

export function Filters({ table }: FilterProps): JSX.Element {
  return (
    <div className='flex flex-row items-center gap-4' style={{ height: TABLE_FILTERS_HEIGHT }}>
      <TierFilter table={table} />
      <NameFilter table={table} />
      <AbilitiesFilter table={table} />
      <TypesFilter table={table} />
    </div>
  );
}
