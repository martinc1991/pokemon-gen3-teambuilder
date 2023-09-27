import { DialogContent, DialogDescription, DialogHeader, TypeBadge, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { getCardTitleName } from '../cards/utils/get-card-title';
import AbilitiesConfigField from './components/fields/abilities';
import GenderConfigField from './components/fields/gender';
import HappinessConfigField from './components/fields/happiness';
import ItemConfigField from './components/fields/item';
import LevelConfigField from './components/fields/level';
import NameConfigField from './components/fields/name';
import NatureConfigField from './components/fields/nature';
import ShinyConfigField from './components/fields/shiny';

export default function SlotConfigModal(): JSX.Element {
  const [slots, selectedSlotIndex] = useTeamStore((state) => [state.slots, state.selectedSlotIndex]);

  if (selectedSlotIndex === null || slots.length < 1) return <div />;

  const slot = slots[selectedSlotIndex];

  return (
    <DialogContent className='max-w-3xl'>
      <DialogHeader className='overflow-auto'>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName({ ...slot })}</Typography.H3>
          <div className='flex gap-2 mr-5'>
            <TypeBadge type={slot.pokemon.typeOneName} />
            {slot.pokemon.typeTwoName !== 'empty' && <TypeBadge type={slot.pokemon.typeTwoName} />}
          </div>
        </div>
        <DialogDescription>Customize your pokemon here. No need to save.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col items-start w-full gap-4 py-4'>
        <div className='flex items-center w-full gap-4'>
          <NameConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <ShinyConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <GenderConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <LevelConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <HappinessConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <AbilitiesConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <ItemConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <NatureConfigField slot={slot} />
        </div>
      </div>
    </DialogContent>
  );
}
