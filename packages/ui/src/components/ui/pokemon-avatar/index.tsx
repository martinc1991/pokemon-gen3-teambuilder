import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { TrashIcon } from '@radix-ui/react-icons';
import { SubstitutePlaceholder } from '../substitute-placeholder';

interface PokemonAvatarProps {
  iconUrl: string | null;
  onClick?: VoidFunction;
  name?: string;
  withBackground?: boolean;
}

export function PokemonAvatar({ iconUrl, name = '', withBackground = false, onClick, ...props }: PokemonAvatarProps) {
  const src = iconUrl ? iconUrl : '';

  return (
    <Avatar
      className={cn('rounded-full h-12 w-12 overflow-visible group', withBackground ? 'bg-primary-foreground' : 'bg-transparent')}
      {...props}
    >
      {onClick && (
        <TrashIcon
          onClick={onClick}
          className={cn(
            'bg-primary-foreground rounded-full absolute text-white h-12 w-12 p-3 opacity-0 group-hover:opacity-70  transition-all ease-in-out duration-300',
            'hover:cursor-pointer',
          )}
        />
      )}
      <AvatarImage src={src} alt={name} title={name} className={cn('-mt-[9px] h-10 w-10')} />
      <AvatarFallback className={cn(withBackground ? 'bg-primary-foreground' : 'bg-transparent')}>
        <SubstitutePlaceholder />
      </AvatarFallback>
    </Avatar>
  );
}
