'use client';

import { Separator } from 'ui';
import { AttackingFilters } from './attacking';
import { DefendingFilters } from './defending';
import { Type } from 'contract';
import clsx from 'clsx';
import { useWindowSize } from 'usehooks-ts';

interface FiltersProps {
  types: Type[];
}

export function Filters({ types }: FiltersProps): JSX.Element {
  const { width } = useWindowSize();
  const biggerThan1600 = width > 1600;

  return (
    <div className={clsx('flex-1 flex gap-2 flex-col justify-start', biggerThan1600 ? 'max-w-md' : 'w-full max-w-2xl')}>
      <AttackingFilters types={types} />
      <Separator></Separator>
      <DefendingFilters types={types} />
    </div>
  );
}
