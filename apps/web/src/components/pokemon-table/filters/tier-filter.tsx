'use client';

import type { Table } from '@tanstack/react-table';
import { getTierText } from '@utils/pokemon';
import type { PokemonWithAbilities, Tier } from 'contract';
import { SORTED_TIERS } from 'pokemon-info';
import type { ComboboxItem } from 'ui';
import { Combobox } from 'ui';
import { ColumnID } from '../columns/constants';

interface TierFiltersProps {
  table: Table<PokemonWithAbilities>;
}

export function TierFilter({ table }: TierFiltersProps): JSX.Element {
  const data: ComboboxItem<Tier>[] = SORTED_TIERS.map((tier) => {
    return { id: tier, label: getTierText(tier), payload: tier };
  });

  function handleChange(item: ComboboxItem<Tier>): void {
    table.getColumn(ColumnID.TIER)?.setFilterValue(item.id);
  }

  function handleClear(): void {
    table.getColumn(ColumnID.TIER)?.setFilterValue('');
  }

  return (
    <div className='flex items-center'>
      <Combobox
        className='min-w-[150px]'
        cleareable
        data={data}
        onChange={handleChange}
        onClear={handleClear}
        placeholder='Tier'
        searchBox
      />
    </div>
  );
}
