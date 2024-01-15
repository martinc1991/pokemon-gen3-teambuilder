import { client } from '@rq-client/index';
import type { Table } from '@tanstack/react-table';
import type { PokemonWithAbilities, Type } from 'contract';
import { ComboboxItem } from 'ui';
import { ColumnID } from '../columns/constants';
import { AbilitiesFilter } from './abilities-filter';
import { NameFilter } from './name-filter';
import { TierFilter } from './tier-filter';
import { TypesFilter } from './types-filter';

export const TABLE_FILTERS_HEIGHT = 40;

interface FilterProps {
  table: Table<PokemonWithAbilities>;
}

export function Filters({ table }: FilterProps): JSX.Element {
  const { isFetching, isError, data } = client.types.getAll.useQuery(['get-all-types']);

  function handleTypeChange(selectedTypes: ComboboxItem<Type>[]): void {
    table.getColumn(ColumnID.TYPES)?.setFilterValue(selectedTypes.map((type) => type.payload.name));
  }
  function handleTypeClear(): void {
    table.getColumn(ColumnID.TYPES)?.setFilterValue([]);
  }

  return (
    <div className='flex flex-row items-center gap-4' style={{ height: TABLE_FILTERS_HEIGHT }}>
      <TierFilter table={table} />
      <NameFilter table={table} />
      <AbilitiesFilter table={table} />
      <TypesFilter
        // TODO: make this not undefined
        types={data?.body || []}
        onChange={handleTypeChange}
        onRemove={handleTypeChange}
        onClear={handleTypeClear}
        disabled={isFetching || isError}
      />
    </div>
  );
}
