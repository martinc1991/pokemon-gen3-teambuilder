import clsx from 'clsx';
import { Type } from 'contract';
import { Separator } from 'ui';
import { useWindowSize } from 'usehooks-ts';
import { AttackingFilters } from './attacking';
import { DefendingFilters } from './defending';

interface FiltersProps {
  types: Type[];
}

export function Filters({ types }: FiltersProps): JSX.Element {
  const { width } = useWindowSize();
  const biggerThan1600 = width > 1600;

  return (
    <div className={clsx('flex-1 flex gap-2 flex-col justify-start', biggerThan1600 ? 'max-w-md' : 'w-full max-w-3xl')}>
      <AttackingFilters types={types} />
      <Separator></Separator>
      <DefendingFilters types={types} />
    </div>
  );
}
