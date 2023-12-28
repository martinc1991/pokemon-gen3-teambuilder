'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { capitalize } from '@utils/common';
import type { Type } from 'contract';
import { useEffect, useState } from 'react';
import type { ComboboxItem } from 'ui';
import { Combobox, TypeBadge } from 'ui';

interface TypeFiltersProps {
  onChange?: (selectedTypes: ComboboxItem<Type>[], selectedType: ComboboxItem<Type>) => void;
  onClear?: (selectedTypes: ComboboxItem<Type>[]) => void;
  onRemove?: (selectedTypes: ComboboxItem<Type>[], deletedType: ComboboxItem<Type>) => void;
  types: Type[];
  disabled?: boolean;
  maxSelectedTypes?: number;
}

const initialValue = { id: '', label: '', payload: {} } as ComboboxItem<Type>; // INFO: Cast because I dont want to fill payload, its just a dummy empty item

export function TypesFilter({
  onChange = () => {},
  onRemove = () => {},
  onClear = () => {},
  types,
  disabled = false,
  maxSelectedTypes = 2,
}: TypeFiltersProps): JSX.Element {
  const [selectedTypes, setSelectedTypes] = useState<ComboboxItem<Type>[]>([]);
  const [currentSelectedType, setCurrentSelectedType] = useState<ComboboxItem<Type>>(initialValue);

  const TYPES: ComboboxItem<Type>[] = types.map((type) => {
    return { id: type.id, label: capitalize(type.name), payload: type };
  });

  function handleChange(item: ComboboxItem<Type>): void {
    // Dont add the same type twice
    if (selectedTypes.length && selectedTypes[0].id === item.id) return;
    const newSelectedTypes = selectedTypes.concat([item]);

    setCurrentSelectedType(item);
    setSelectedTypes(newSelectedTypes);
    onChange(newSelectedTypes, item);
  }

  function handleRemoveOne(deletedTypeItem: ComboboxItem<Type>): void {
    const newSelectedTypes = selectedTypes.filter((type) => type.label !== deletedTypeItem.label);
    if (newSelectedTypes.length < 1) setCurrentSelectedType(initialValue);

    setSelectedTypes(newSelectedTypes);
    onRemove(newSelectedTypes, deletedTypeItem);
  }

  function handleClear(): void {
    setSelectedTypes([]);
    setCurrentSelectedType(initialValue);
    onClear(selectedTypes);
  }

  useEffect(() => {
    if (selectedTypes.length > 0) {
      setCurrentSelectedType(selectedTypes[selectedTypes.length - 1]);
    } else {
      setCurrentSelectedType(initialValue);
    }
  }, [selectedTypes]);

  return (
    <div className='flex items-center'>
      <Combobox
        className='min-w-[150px]'
        clearDisabled={!selectedTypes.length}
        cleareable
        data={TYPES}
        disabled={disabled || selectedTypes.length >= maxSelectedTypes}
        onChange={handleChange}
        onClear={handleClear}
        placeholder='Types'
        searchBox
        value={currentSelectedType}
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
