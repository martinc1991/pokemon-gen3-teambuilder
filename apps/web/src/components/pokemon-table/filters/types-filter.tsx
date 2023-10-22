'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';
import { capitalize } from '@utils/common';
import type { IPokemonGetAllResponseElement, IType, TypeNames } from 'contract';
import { useEffect, useState } from 'react';
import type { ComboboxItem } from 'ui';
import { Combobox, TypeBadge } from 'ui';
import { client } from '../../../rq-client';
import { ColumnID } from '../columns/constants';

interface TypeFiltersProps {
  table: Table<IPokemonGetAllResponseElement>;
}

const initialValue = { id: '', label: '', payload: {} } as ComboboxItem<IType>; // INFO: Cast because I dont want to fill payload, its just a dummy empty item

export function TypesFilter({ table }: TypeFiltersProps): JSX.Element {
  const [selectedTypes, setSelectedTypes] = useState<ComboboxItem<IType>[]>([]);
  const [selectedValue, setSelectedValue] = useState<ComboboxItem<IType>>(initialValue);
  const { data, isFetching, isError } = client.types.getAll.useQuery(['get-all-types']);

  const DATA: ComboboxItem<IType>[] =
    data?.body.map((type) => {
      return { id: type.name, label: capitalize(type.name), payload: type };
    }) || [];

  function setNewFilterValues(types: ComboboxItem<IType>[], filterValues: TypeNames[]): void {
    table.getColumn(ColumnID.TYPES)?.setFilterValue(filterValues);
    setSelectedTypes(types);
  }

  function handleChange(item: ComboboxItem<IType>): void {
    // Dont add the same type twice
    if (selectedTypes.length && selectedTypes[0].id === item.id) return;

    setSelectedValue(item);
    const newSelectedTypes = selectedTypes.concat([item]);
    const newFilterValues = newSelectedTypes.map((type) => type.payload.name);

    setNewFilterValues(newSelectedTypes, newFilterValues);
  }

  function handleRemoveOne(deletedTypeItem: ComboboxItem<IType>): void {
    const newSelectedTypes = selectedTypes.filter((type) => type.label !== deletedTypeItem.label);
    const newFilterValues = newSelectedTypes.map((type) => type.payload.name);
    if (newSelectedTypes.length < 1) setSelectedValue(initialValue);

    setNewFilterValues(newSelectedTypes, newFilterValues);
  }

  function handleClear(): void {
    setNewFilterValues([], []);
    setSelectedValue(initialValue);
  }

  useEffect(() => {
    if (selectedTypes.length > 0) {
      setSelectedValue(selectedTypes[selectedTypes.length - 1]);
    } else {
      setSelectedValue(initialValue);
    }
  }, [selectedTypes]);

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
        value={selectedValue}
      />
      <div className='flex gap-4'>
        {selectedTypes.length > 0 &&
          selectedTypes.map((item) => {
            return (
              <div className='flex items-center gap-2' key={`filer-types-${item.payload.name}`}>
                <TypeBadge type={item.payload.name} />
                <div>
                  <Cross2Icon
                    className='text-white hover:cursor-pointer'
                    onClick={() => {
                      handleRemoveOne(item);
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
