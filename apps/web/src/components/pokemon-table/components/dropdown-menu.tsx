import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useTeamStore } from '@state/team';
import { MAX_TEAM_MEMBERS, type IPokemon } from 'contract';
import Link from 'next/link';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'ui';

interface RowDropdownMenuProps {
  pokemon: IPokemon;
}

export default function RowDropdownMenu(props: RowDropdownMenuProps): JSX.Element {
  const [slots, addPokemon] = useTeamStore((state) => [state.slots, state.addSlot]);

  const addPokemonDisabled = slots.length >= MAX_TEAM_MEMBERS;

  function handleClick(): void {
    if (!addPokemonDisabled) addPokemon(props.pokemon);
  }

  return (
    <div className='flex flex-row place-content-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='sm' variant='ghost'>
            <span className='sr-only'>Open menu</span>
            <DotsHorizontalIcon className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem disabled={addPokemonDisabled} onClick={handleClick}>
            Add to team
          </DropdownMenuItem>
          <DropdownMenuItem disabled={addPokemonDisabled}>
            <Link href={`/pokemon/${props.pokemon.name}`}>Details</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
