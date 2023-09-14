import clsx from 'clsx';
import { Badge } from '../badge';
import { commonClasseses, typeClassNames } from './helpers';
import { TypesNames } from 'contract';

interface TypeBadgeProps {
  type: TypesNames;
}

export function TypeBadge({ type = 'empty' }: TypeBadgeProps) {
  return (
    <Badge variant='default' className={clsx(commonClasseses, typeClassNames[type])}>
      {type}
    </Badge>
  );
}
