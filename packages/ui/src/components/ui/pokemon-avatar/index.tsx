import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { idToIconUrl } from '@/lib/utils';
import { SubstitutePlaceholder } from '../substitute-placeholder';

interface PokemonAvatarProps {
  inputId: number;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

export function PokemonAvatar({ inputId, ...props }: PokemonAvatarProps) {
  const icon = idToIconUrl(inputId);

  return (
    <Avatar className='bg-primary-foreground' {...props}>
      <AvatarImage src={icon} alt={inputId.toString()} className='bg-primary-foreground -mt-[9px] h-10 w-10' />
      <AvatarFallback className='bg-primary-foreground'>
        <SubstitutePlaceholder />
      </AvatarFallback>
    </Avatar>
  );
}
