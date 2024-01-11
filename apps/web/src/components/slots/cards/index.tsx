import { GendersText } from '@components/pokemon-table/components/genders-text';
import { LocalSlot } from 'contract';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, PokemonSprite, TypeBadge, Typography } from 'ui';
import { calculateHiddenPowerType, getPokemonSpriteUrl } from 'utils';
import PokemonCardMoves from './components/card-moves';
import PokemonCardStats from './components/card-stats';
import CardInfoField from './components/info-field';
import { getCardTitleName } from './utils/get-card-title';
import { client } from '@rq-client/index';
import LoadingState from '@components/loading-state';

interface PokemonCardProps {
  slot: LocalSlot;
  order: number;
}

export function FilledPokemonCard({ slot, order }: PokemonCardProps): JSX.Element {
  const { isError, isLoading, data } = client.pokemon.getOne.useQuery([`get-one-pokemon-${slot.nationalPokedexNumber}`], {
    params: { nationalDexNumber: slot.nationalPokedexNumber.toString() },
  });

  const pokemon = data?.body;

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Card className='w-[500px] min-h-[332px] hover:bg-primary-foreground hover:cursor-pointer transition duration-150 ease-in-out'>
      <CardHeader>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName(slot, order)}</Typography.H3>
          <div className='flex gap-2'>
            {pokemon && <TypeBadge type={pokemon.typeOneName} />}
            {pokemon && pokemon.typeTwoName !== 'empty' && <TypeBadge type={pokemon.typeTwoName} />}
          </div>
        </div>
      </CardHeader>

      {pokemon ? (
        <CardContent className='flex flex-col gap-4'>
          <div className='flex gap-7'>
            {/* First column (img) */}
            <PokemonSprite url={getPokemonSpriteUrl(slot.nationalPokedexNumber)} alt={slot.species} />

            {/* Second column (level - gender - happiness - shiny) */}
            <div className='flex flex-col min-w-[150px] gap-1' style={{ border: '1px solid transparent' }}>
              <CardInfoField fieldName='Lv'>{slot.level}</CardInfoField>
              <CardInfoField fieldName='Gender'>
                <GendersText genders={[slot.gender]} />
              </CardInfoField>
              <CardInfoField fieldName='Happiness'>{slot.happiness}</CardInfoField>
              <CardInfoField fieldName='Shiny'>{slot.shiny ? 'Yes' : 'No'}</CardInfoField>
            </div>

            {/* Third column (ability - item - nature - hp type) */}
            <div className='flex flex-col flex-1 gap-1'>
              <CardInfoField fieldName='Ability'>{slot.abilityName.replace('-', ' ')}</CardInfoField>
              <CardInfoField fieldName='Item'>{slot.itemName?.replace('-', ' ') || '-'}</CardInfoField>
              <CardInfoField fieldName='Nature'>{slot.natureName}</CardInfoField>
              <CardInfoField fieldName='HP type'>{calculateHiddenPowerType(slot.ivs)}</CardInfoField>
            </div>
          </div>
          <div className='flex w-full'>
            <PokemonCardMoves slot={slot} />
            <PokemonCardStats slot={slot} pokemon={pokemon} />
          </div>
        </CardContent>
      ) : (
        <LoadingState />
      )}
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
