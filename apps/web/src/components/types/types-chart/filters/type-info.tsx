'use client';

import { TypeNames } from 'contract';
import { TypeBadge, Typography } from 'ui';

interface TypeInfoProps {
  types: TypeNames[];
  title: string;
}

export function Typeinfo({ types, title }: TypeInfoProps): JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
      <Typography.Small>{title}:</Typography.Small>
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
