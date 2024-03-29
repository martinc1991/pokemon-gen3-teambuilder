import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { useTeamStore } from '@state/team';
import { MAX_TEAM_MEMBERS, type PokemonWithAbilities } from 'contract';
import Link from 'next/link';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'ui';

interface RowDropdownMenuProps {
  pokemon: PokemonWithAbilities;
}

export default function RowDropdownMenu(props: RowDropdownMenuProps): JSX.Element {
  const [slots, addSlot] = useTeamStore((state) => [state.slots, state.addSlot]);

  const addPokemonDisabled = slots.length >= MAX_TEAM_MEMBERS;

  function handleClick(): void {
    if (!addPokemonDisabled)
      addSlot({
        abilityName: props.pokemon.abilities[0].name,
        gender: props.pokemon.genders[0],
        nationalPokedexNumber: props.pokemon.nationalPokedexNumber,
        species: props.pokemon.name,
      });
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
          <Link href={`/pokemon/${props.pokemon.name}`}>
            <DropdownMenuItem>Details</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
