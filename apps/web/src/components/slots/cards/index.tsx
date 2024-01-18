import LoadingState from '@components/loading-state';
import { GendersText } from '@components/pokemon-table/components/genders-text';
import { client } from '@rq-client/index';
import { LocalSlot } from 'contract';
import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { Button, Card, CardContent, CardFooter, CardHeader, DialogTrigger, PokemonSprite, TypeBadge, Typography } from 'ui';
import { calculateHiddenPowerType, getPokemonSpriteUrl } from 'utils';
import PokemonCardMoves from './components/card-moves';
import PokemonCardStats from './components/card-stats';
import CardInfoField from './components/info-field';
import { getCardTitleName } from './utils/get-card-title';

interface PokemonCardProps {
  slot: LocalSlot;
  order: number;
  onEditClick?: MouseEventHandler<HTMLButtonElement>;
  // onRemoveClick?: (slot: LocalSlot, order: number) => void;
}

export function FilledPokemonCard(props: PokemonCardProps): JSX.Element {
  const { isError, isLoading, data, refetch } = client.pokemon.getOne.useQuery([`get-one-pokemon-${props.slot.nationalPokedexNumber}`], {
    params: { nationalDexNumber: props.slot.nationalPokedexNumber.toString() },
  });

  if (isLoading) return <LoadingCard />;
  if (isError) return <ErrorCard onClick={refetch} />;

  const pokemon = data.body;

  return (
    <Card className='w-[500px]'>
      <CardHeader>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName(props.slot, props.order)}</Typography.H3>
          <div className='flex gap-2'>
            {pokemon && <TypeBadge type={pokemon.typeOneName} />}
            {pokemon && pokemon.typeTwoName !== 'empty' && <TypeBadge type={pokemon.typeTwoName} />}
          </div>
        </div>
      </CardHeader>

      <CardContent className='flex gap-7'>
        {/* First column (img) */}
        <PokemonSprite url={getPokemonSpriteUrl(props.slot.nationalPokedexNumber)} alt={props.slot.species} />

        {/* Second column (level - gender - happiness - shiny) */}
        <div className='flex flex-col min-w-[150px] gap-1' style={{ border: '1px solid transparent' }}>
          <CardInfoField fieldName='Lv'>{props.slot.level}</CardInfoField>
          <CardInfoField fieldName='Gender'>
            <GendersText genders={[props.slot.gender]} />
          </CardInfoField>
          <CardInfoField fieldName='Happiness'>{props.slot.happiness}</CardInfoField>
          <CardInfoField fieldName='Shiny'>{props.slot.shiny ? 'Yes' : 'No'}</CardInfoField>
        </div>

        {/* Third column (ability - item - nature - hp type) */}
        <div className='flex flex-col flex-1 gap-1'>
          <CardInfoField fieldName='Ability'>{props.slot.abilityName.replace('-', ' ')}</CardInfoField>
          <CardInfoField fieldName='Item'>{props.slot.itemName?.replace('-', ' ') || '-'}</CardInfoField>
          <CardInfoField fieldName='Nature'>{props.slot.natureName}</CardInfoField>
          <CardInfoField fieldName='HP type'>{calculateHiddenPowerType(props.slot.ivs)}</CardInfoField>
        </div>
      </CardContent>

      <CardContent className='flex w-full gap-8'>
        <PokemonCardStats slot={props.slot} pokemon={pokemon} />
        <PokemonCardMoves slot={props.slot} />
      </CardContent>

      <CardFooter className='justify-end gap-4'>
        <DialogTrigger key={props.slot.meta.id} onClick={props.onEditClick}>
          <Button variant='outline'>Edit</Button>
        </DialogTrigger>
        {/* <Button
          variant='destructive'
          onClick={() => {
            if (props.onRemoveClick) {
              props.onRemoveClick(props.slot, props.order);
            }
          }}
        >
          Remove
        </Button> */}
      </CardFooter>
    </Card>
  );
}

export function EmptyPokemonCard(): JSX.Element {
  return (
    <Card className='flex min-h-[332px] justify-center items-center w-[500px] p-6'>
      <Typography.Muted className='text-center'>Empty.</Typography.Muted>
      <Link href={`/pokemon`}>
        <Button className='px-2' variant='link'>
          Add pokemon.
        </Button>
      </Link>
    </Card>
  );
}

function LoadingCard(): JSX.Element {
  return (
    <Card className='flex min-h-[332px] justify-center items-center w-[500px] p-6'>
      <LoadingState />
    </Card>
  );
}

interface ErrorCardProps {
  onClick: VoidFunction;
}
function ErrorCard({ onClick }: ErrorCardProps): JSX.Element {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.stopPropagation();
    onClick();
  }

  return (
    <Card className='flex flex-col gap-2 min-h-[332px] justify-center items-center w-[500px] p-6'>
      <Typography.Muted className='text-center'>Error loading pokemon.</Typography.Muted>
      <Button onClick={handleClick} className='px-0' variant='link'>
        Try again.
      </Button>
    </Card>
  );
}
