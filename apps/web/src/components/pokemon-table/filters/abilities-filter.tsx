import type { Table } from '@tanstack/react-table';
import type { PokemonWithAbilities } from 'contract';
import { useEffect, useState, type ChangeEvent } from 'react';
import { Input } from 'ui';
import { useDebounce } from 'usehooks-ts';
import { ColumnID } from '../columns/constants';

interface NameAbilityFilterProps {
  table: Table<PokemonWithAbilities>;
}

export function AbilitiesFilter({ table }: NameAbilityFilterProps): JSX.Element {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  useEffect(() => {
    table.getColumn(ColumnID.ABILITIES)?.setFilterValue(value);
  }, [debouncedValue]);

  return <Input className='max-w-[200px]' onChange={handleChange} placeholder='Ability' />;
}
