import { Checkbox, DialogContent, DialogDescription, DialogHeader, Label, TypeBadge, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { getCardTitleName } from '../cards/utils/get-card-title';
import AbilitiesConfigField from './components/fields/abilities';
import GenderConfigField from './components/fields/gender';
import HappinessConfigField from './components/fields/happiness';
import LevelConfigField from './components/fields/level';
import NameConfigField from './components/fields/name';

export default function SlotConfigModal(): JSX.Element {
  const [slots, selectedSlotIndex, setSlotFieldValue] = useTeamStore((state) => [
    state.slots,
    state.selectedSlotIndex,
    state.setSlotFieldValue,
  ]);

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
          <Label className='text-white min-w-[60px]' htmlFor='shiny'>
            Shiny
          </Label>
          <Checkbox
            checked={Boolean(slot.shiny)}
            id='shiny'
            onCheckedChange={(checked) => {
              const c = checked === true;
              setSlotFieldValue(slot, 'shiny', c);
            }}
          />
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
      </div>
    </DialogContent>
  );
}
