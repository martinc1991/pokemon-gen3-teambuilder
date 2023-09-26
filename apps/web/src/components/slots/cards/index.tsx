import { Card, CardContent, CardHeader, TypeBadge, Typography } from 'ui';
import type { TeamSlot } from '../../../state/team/helpers';
import { GendersText } from '../../pokemon-table/components/genders-text';
import PokemonCardImage from './components/card-image';
import PokemonCardMoves from './components/card-moves';
import PokemonCardStats from './components/card-stats';
import CardInfoField from './components/info-field';
import { getCardTitleName } from './utils/get-card-title';

interface PokemonCardProps {
  slot: TeamSlot;
}

export default function PokemonCard({ slot }: PokemonCardProps): JSX.Element {
  return (
    <Card className='w-[500px] hover:bg-slate-700 hover:cursor-pointer transition duration-150 ease-in-out'>
      <CardHeader>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName(slot)}</Typography.H3>
          <div className='flex gap-2'>
            <TypeBadge type={slot.pokemon.typeOneName} />
            {slot.pokemon.typeTwoName !== 'empty' && <TypeBadge type={slot.pokemon.typeTwoName} />}
          </div>
        </div>
      </CardHeader>

      <CardContent className='flex flex-col gap-4'>
        <div className='flex gap-7'>
          {/* First column (img) */}
          <PokemonCardImage pokemon={slot.pokemon} />

          {/* Second column (level - gender - happiness - shiny) */}
          <div className='flex flex-col min-w-[120px] gap-1' style={{ border: '1px solid transparent' }}>
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
            <CardInfoField fieldName='Item'>{slot.itemName || '-'}</CardInfoField>
            <CardInfoField fieldName='Nature'>{slot.natureName || '-'}</CardInfoField>
            {/* HARDCODED: */}
            <CardInfoField fieldName='HP type'>-</CardInfoField>
          </div>
        </div>
        <div className='flex w-full'>
          <PokemonCardMoves />
          <PokemonCardStats pokemon={slot.pokemon} />
        </div>
      </CardContent>
    </Card>
  );
}
