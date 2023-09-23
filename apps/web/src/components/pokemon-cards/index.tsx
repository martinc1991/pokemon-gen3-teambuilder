import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  TypeBadge,
  Typography,
} from 'ui';
import type { FilledSlot } from '../../state/team/helpers';
import PokemonCardImage from './components/card-image';
import PokemonCardMoves from './components/card-moves';
import PokemonCardStats from './components/card-stats';
import CardInfoField from './components/info-field';
import { getCardTitleName } from './utils/get-card-title';

interface PokemonCardProps {
  slot: FilledSlot;
}

export default function PokemonCard({ slot }: PokemonCardProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleClick(): void {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Card className='w-[500px] hover:bg-slate-700 hover:cursor-pointer transition duration-150 ease-in-out' onClick={handleClick}>
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

          {/* Second column (level gender happiness) */}
          <div className='flex flex-col min-w-[120px] gap-1' style={{ border: '1px solid transparent' }}>
            {/* HARDCODED: */}
            <CardInfoField fieldName='Lv'>100</CardInfoField>
            <CardInfoField fieldName='Gender'>
              {/* HARDCODED: */}
              <Typography.Male>Male</Typography.Male>
            </CardInfoField>
            {/* HARDCODED: */}
            <CardInfoField fieldName='Happiness'>255</CardInfoField>
            <CardInfoField fieldName='Shiny'>{slot.shiny ? 'Yes' : 'No'}</CardInfoField>
          </div>

          {/* Third column (ability, item, hp type, shiny) */}
          <div className='flex flex-col flex-1 gap-1'>
            <CardInfoField fieldName='Ability'>{slot.abilityName || '-'}</CardInfoField>
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

      <Dialog open={isModalOpen}>
        <DialogContent>
          <Button onClick={handleClick}>Close</Button>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
