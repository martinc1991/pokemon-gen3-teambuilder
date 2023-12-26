'use client';

import { TypesFilter } from '@components/pokemon-table/filters/types-filter';
import { useTypeChartStore } from '@state/type-chart';
import { Type, TypeNames } from 'contract';
import { ComboboxItem, TypeBadge, Typography } from 'ui';

export function AttackingFilters({ types }: { types: Type[] }): JSX.Element {
  const [setAttackingType, clearSelectedTypes, attackingType] = useTypeChartStore((state) => [
    state.setAttackingType,
    state.clearAttackingType,
    state.attackingType,
  ]);

  function handleTypeChange(_: ComboboxItem<Type>[], type: ComboboxItem<Type>): void {
    setAttackingType(type.payload);
  }

  function handleTypeClear(): void {
    clearSelectedTypes();
  }

  return (
    <div className='flex flex-col flex-1 gap-4'>
      <Typography.H4>Attacking</Typography.H4>
      <TypesFilter types={types} onClear={handleTypeClear} onChange={handleTypeChange} onRemove={handleTypeClear} maxSelectedTypes={1} />
      {attackingType ? <AttackingTypeInfo type={attackingType} /> : <Typography.Muted>Select a type</Typography.Muted>}
    </div>
  );
}

interface AttackingTypeInfoProps {
  type: Type;
}

function AttackingTypeInfo({ type }: AttackingTypeInfoProps): JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
      <Typeinfo title='Super effective to' types={type.doubleDamageTo} />
      <Typeinfo title='Not very effective to' types={type.halfDamageTo} />
      <Typeinfo title='No damage to' types={type.noDamageTo} />
    </div>
  );
}

interface TypeInfoProps {
  types: TypeNames[];
  title: string;
}

function Typeinfo({ types, title }: TypeInfoProps): JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
      <Typography.Word>{title}:</Typography.Word>
      {types.length ? (
        <div className='flex gap-2 flex-wrap'>
          {types.map((t) => {
            return <TypeBadge key={`${title}-${t}`} type={t} />;
          })}
        </div>
      ) : (
        <Typography.Word>-</Typography.Word>
      )}
    </div>
  );
}
