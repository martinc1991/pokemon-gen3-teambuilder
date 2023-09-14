import clsx from 'clsx';
import { Badge } from '../badge';
import { TypesNames, commonClasseses, typeClassNames } from './helpers';

interface TypeBadgeProps {
  type: TypesNames;
}

export function TypeBadge({ type = TypesNames.empty }: TypeBadgeProps) {
  return (
    <Badge variant='default' className={clsx(commonClasseses, typeClassNames[type])}>
      {type}
    </Badge>
  );
}
