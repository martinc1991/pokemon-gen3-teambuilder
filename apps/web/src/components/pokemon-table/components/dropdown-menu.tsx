import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { IPokemon } from 'contract';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'ui';
import { useTeamStore } from '../../../state/team';

interface RowDropdownMenuProps {
  pokemon: IPokemon;
}

export default function RowDropdownMenu(props: RowDropdownMenuProps): JSX.Element {
  const addPokemon = useTeamStore((state) => state.addSlot);

  function handleClick(): void {
    addPokemon(props.pokemon);
  }

  return (
    <div className='flex flex-row justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='sm' variant='ghost'>
            <span className='sr-only'>Open menu</span>
            <DotsHorizontalIcon className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem onClick={handleClick}>Add to team</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
