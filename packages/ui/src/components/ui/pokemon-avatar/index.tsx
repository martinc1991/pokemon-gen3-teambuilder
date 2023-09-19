import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SubstitutePlaceholder } from '../substitute-placeholder';

interface PokemonAvatarProps {
  iconUrl: string | null;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  name?: string;
}

export function PokemonAvatar({ iconUrl, name = '', ...props }: PokemonAvatarProps) {
  const src = iconUrl ? iconUrl : '';

  return (
    <Avatar className='bg-primary-foreground' {...props}>
      <AvatarImage src={src} alt={name} title={name} className='bg-primary-foreground -mt-[9px] h-10 w-10' />
      <AvatarFallback className='bg-primary-foreground'>
        <SubstitutePlaceholder />
      </AvatarFallback>
    </Avatar>
  );
}
