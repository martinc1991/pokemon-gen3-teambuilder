'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement, IType, TypeNames } from 'contract';
import { useState } from 'react';
import type { ComboboxItem } from 'ui';
import { Combobox, TypeBadge } from 'ui';
import { client } from '../../../rq-client';
import { capitalize } from '../../../utils/common';
import { ColumnID } from '../columns/constants';

interface TypeFiltersProps {
  table: Table<IPokemonGetAllResponseElement>;
}

export function TypesFilter({ table }: TypeFiltersProps): JSX.Element {
  const [selectedTypes, setSelectedTypes] = useState<IType[]>([]);
  const { data, isFetching, isError } = client.types.getAll.useQuery(['get-all-types']);

  const DATA: ComboboxItem<IType>[] =
    data?.body.map((type) => {
      return { id: type.name, label: capitalize(type.name), payload: type };
    }) || [];

  function setNewFilterValues(types: IType[], filterValues: TypeNames[]): void {
    table.getColumn(ColumnID.TYPES)?.setFilterValue(filterValues);
    setSelectedTypes(types);
  }

  function handleChange(item: ComboboxItem<IType>): void {
    // Dont add the same type twice
    if (selectedTypes.length && selectedTypes[0].name === item.id) return;

    const newSelectedTypes = selectedTypes.concat([item.payload]);
    const newFilterValues = newSelectedTypes.map((type) => type.name);

    setNewFilterValues(newSelectedTypes, newFilterValues);
  }

  function handleRemoveOne(deletedType: IType): void {
    const newSelectedTypes = selectedTypes.filter((type) => type.name !== deletedType.name);
    const newFilterValues = newSelectedTypes.map((type) => type.name);

    setNewFilterValues(newSelectedTypes, newFilterValues);
  }

  function handleClear(): void {
    setNewFilterValues([], []);
  }

  return (
    <div className='flex items-center'>
      <Combobox
        className='min-w-[150px]'
        clearDisabled={selectedTypes.length < 1}
        cleareable
        data={DATA}
        disabled={isFetching || isError || selectedTypes.length > 1}
        onChange={handleChange}
        onClear={handleClear}
        placeholder='Types'
        searchBox
      />
      <div className='flex gap-4'>
        {selectedTypes.length > 0 &&
          selectedTypes.map((type) => {
            return (
              <div className='flex items-center gap-2' key={`filer-types-${type.name}`}>
                <TypeBadge type={type.name} />
                <div>
                  <Cross2Icon
                    className='text-white hover:cursor-pointer'
                    onClick={() => {
                      handleRemoveOne(type);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
