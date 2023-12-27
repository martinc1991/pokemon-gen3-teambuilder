import clsx from 'clsx';
import { TypeNames } from 'contract';
import { Badge } from '../badge';
import { Tiny } from '../typography';
import { commonClasseses, tinyClasseses, typeClassNames } from './helpers';

interface TypeBadgeProps {
  type: TypeNames;
  tiny?: boolean;
}

export function TypeBadge({ type = 'empty', tiny = false }: TypeBadgeProps) {
  return (
    <Badge variant='default' className={clsx(tiny ? tinyClasseses : commonClasseses, typeClassNames[type])}>
      <Tiny>{tiny ? type[0] : type}</Tiny>
    </Badge>
  );
}
