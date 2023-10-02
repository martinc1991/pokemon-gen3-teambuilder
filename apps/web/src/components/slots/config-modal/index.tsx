import { MAX_HAPPINESS, MAX_LEVEL, MAX_POKEMON_NAME_LENGTH, MIN_HAPPINESS, MIN_LEVEL } from 'contract';
import { DialogContent, DialogDescription, DialogHeader, FormField, Separator, TypeBadge, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { getCardTitleName } from '../cards/utils/get-card-title';
import AbilitiesConfigField from './components/fields/abilities';
import GenderConfigField from './components/fields/gender';
import ItemConfigField from './components/fields/item';
import NatureConfigField from './components/fields/nature';
import SlotStatsFields from './components/fields/stats';

export default function SlotConfigModal(): JSX.Element {
  const [slots, selectedSlotIndex, setSlotFieldValue] = useTeamStore((state) => [
    state.slots,
    state.selectedSlotIndex,
    state.setSlotFieldValue,
  ]);

  if (selectedSlotIndex === null || slots.length < 1) return <div />;

  const slot = slots[selectedSlotIndex];

  return (
    <DialogContent className='max-w-4xl'>
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
      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4 className='truncate'>Basic</Typography.H4>

        <div className='flex items-center w-full gap-4'>
          <FormField.Text
            name='name'
            onChange={(e) => {
              if (e.target.value.length < MAX_POKEMON_NAME_LENGTH) {
                setSlotFieldValue(slot, 'name', e.target.value);
              }
            }}
            placeholder='Change the name here'
            value={slot.name || ''}
          />
          <FormField.Checkbox
            checked={Boolean(slot.shiny)}
            name='shiny'
            onCheckedChange={(checked) => {
              const c = checked === true;
              setSlotFieldValue(slot, 'shiny', c);
            }}
          />
        </div>
        <div className='flex items-center w-full gap-4'>
          <GenderConfigField slot={slot} />
          <FormField.Number
            max={MAX_LEVEL}
            min={MIN_LEVEL}
            name='level'
            onChange={(value: number) => {
              setSlotFieldValue(slot, 'level', value);
            }}
            value={slot.level}
          />
          <FormField.Number
            max={MAX_HAPPINESS}
            min={MIN_HAPPINESS}
            name='happiness'
            onChange={(value: number) => {
              setSlotFieldValue(slot, 'happiness', value);
            }}
            value={slot.happiness}
          />
        </div>
        <div className='flex items-center w-full gap-4' />
        <Separator />
        <Typography.H4 className='truncate'>Abilitiy, item and nature</Typography.H4>

        <div className='flex items-center w-full gap-4 '>
          <AbilitiesConfigField slot={slot} />
          <NatureConfigField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <ItemConfigField slot={slot} />
        </div>
      </div>
      <Separator />
      <SlotStatsFields slot={slot} />
    </DialogContent>
  );
}
