'use client';

import { TypesFilter } from '@components/pokemon-table/filters/types-filter';
import { useTypeChartStore } from '@state/type-chart';
import { Type } from 'contract';
import { ComboboxItem, Typography } from 'ui';
import { getTypeCombinationDefensiveDamageInfo } from '../helpers';
import { Typeinfo } from './type-info';

export function DefendingFilters({ types }: { types: Type[] }): JSX.Element {
  const { defendingTypes, addDefendingType, clearDefendingTypes, removeDefendingType } = useTypeChartStore((state) => state);

  function handleTypeChange(_: ComboboxItem<Type>[], type: ComboboxItem<Type>): void {
    addDefendingType(type.payload);
  }

  function handleTypeRemove(_: ComboboxItem<Type>[], type: ComboboxItem<Type>): void {
    removeDefendingType(type.payload);
  }
  function handleTypeClear(): void {
    clearDefendingTypes();
  }

  return (
    <div className='flex flex-col flex-1 gap-4'>
      <Typography.H4>Defending</Typography.H4>
      <TypesFilter
        types={types.filter((t) => t.name !== 'empty')}
        onClear={handleTypeClear}
        onChange={handleTypeChange}
        onRemove={handleTypeRemove}
      />
      {defendingTypes.length ? (
        <DefendingTypeInfo typeOne={defendingTypes[0]} typeTwo={defendingTypes[1]} />
      ) : (
        <Typography.Muted>Select one or two types</Typography.Muted>
      )}
    </div>
  );
}

interface AttackingTypeInfoProps {
  typeOne: Type;
  typeTwo?: Type;
}

function DefendingTypeInfo({ typeOne, typeTwo }: AttackingTypeInfoProps): JSX.Element {
  const { noDamageFrom, cuadrupleDamageFrom, doubleDamageFrom, quarterDamageFrom, halfDamageFrom } = getTypeCombinationDefensiveDamageInfo(
    typeOne,
    typeTwo,
  );
  return (
    <div className='flex flex-col gap-2'>
      <Typeinfo title='4x damage from' types={cuadrupleDamageFrom} />
      <Typeinfo title='2x damage from' types={doubleDamageFrom} />
      <Typeinfo title='1/2 damage from' types={halfDamageFrom} />
      <Typeinfo title='1/4 damage from' types={quarterDamageFrom} />
      <Typeinfo title='No damage from' types={noDamageFrom} />
      {/* TODO: add pokemon examples with that typing combination */}
    </div>
  );
}
