import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { SubstitutePlaceholder } from '../substitute-placeholder';

interface PokemonAvatarProps {
  iconUrl: string | null;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  name?: string;
  withBackground?: boolean;
}

export function PokemonAvatar({ iconUrl, name = '', withBackground = false, ...props }: PokemonAvatarProps) {
  const src = iconUrl ? iconUrl : '';

  return (
    <Avatar className={cn(withBackground ? 'bg-primary-foreground' : 'bg-transparent')} {...props}>
      <AvatarImage
        src={src}
        alt={name}
        title={name}
        className={cn('-mt-[9px] h-10 w-10', withBackground ? 'bg-primary-foreground' : 'bg-transparent')}
      />
      <AvatarFallback className={cn(withBackground ? 'bg-primary-foreground' : 'bg-transparent')}>
        <SubstitutePlaceholder />
      </AvatarFallback>
    </Avatar>
  );
}
