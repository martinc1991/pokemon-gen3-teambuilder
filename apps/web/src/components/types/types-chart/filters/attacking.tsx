import { TypesFilter } from '@components/pokemon-table/filters/types-filter';
import { useTypeChartStore } from '@state/type-chart';
import { Type } from 'contract';
import { ComboboxItem, Typography } from 'ui';
import { Typeinfo } from './type-info';

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
    <div className='flex flex-col gap-4'>
      <Typography.H4>Attacking</Typography.H4>
      <TypesFilter
        types={types.filter((type) => type.name !== 'empty')}
        onClear={handleTypeClear}
        onChange={handleTypeChange}
        onRemove={handleTypeClear}
        maxSelectedTypes={1}
      />
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
      <Typeinfo title='2x damage to' types={type.doubleDamageTo} />
      <Typeinfo title='1/2 damage to' types={type.halfDamageTo} />
      <Typeinfo title='No damage to' types={type.noDamageTo} />
    </div>
  );
}
