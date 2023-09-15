import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { IPokemon } from 'contract';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'ui';
import { useTeamStore } from '../../../state/team';

interface RowDropdownMenuProps {
  pokemon: IPokemon;
}

export default function RowDropdownMenu(props: RowDropdownMenuProps): JSX.Element {
  const addPokemon = useTeamStore((state) => state.addPokemon);

  function handleClick(): void {
    addPokemon(props.pokemon);
  }

  return (
    <div className='flex flex-row justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='w-6 h-6 p-0' variant='ghost'>
            <span className='sr-only'>Open menu</span>
            <DotsHorizontalIcon className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleClick}>Add to team</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
