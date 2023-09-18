import clsx from 'clsx';
import { TypeNames } from 'contract';
import { Badge } from '../badge';
import { Tiny } from '../typography';
import { commonClasseses, typeClassNames } from './helpers';

interface TypeBadgeProps {
  type: TypeNames;
}

export function TypeBadge({ type = 'empty' }: TypeBadgeProps) {
  return (
    <Badge variant='default' className={clsx(commonClasseses, typeClassNames[type])}>
      <Tiny>{type}</Tiny>
    </Badge>
  );
}
