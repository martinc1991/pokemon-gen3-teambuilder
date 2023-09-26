import type { Gender } from 'contract';
import type { CompleteAbility } from 'contract/dist/prisma/zod';
import type { ComboboxItem } from 'ui';
import { Checkbox, Combobox, DialogContent, DialogDescription, DialogHeader, Input, Label, TypeBadge, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { capitalize } from '../../../utils/common';
import { getCardTitleName } from '../cards/utils/get-card-title';

export default function SlotConfigModal(): JSX.Element {
  const [slots, selectedSlotIndex, setSlotFieldValue] = useTeamStore((state) => [
    state.slots,
    state.selectedSlotIndex,
    state.setSlotFieldValue,
  ]);

  if (selectedSlotIndex === null) return <div />;

  const slot = slots[selectedSlotIndex];

  const { pokemon } = slot;
  if (pokemon === null) return <div />;

  const gendersData = pokemon.genders.map((gender) => ({ id: gender.toString(), label: capitalize(gender.toString()), payload: gender }));
  const abilitiesData = pokemon.abilities.map((ability) => ({ id: ability.name, label: capitalize(ability.name), payload: ability }));

  function handleGenderChange(item: ComboboxItem<Gender>): void {
    if (item.payload) {
      setSlotFieldValue(slot, 'gender', item.payload);
    }
  }

  function handleAbilityChange(item: ComboboxItem<CompleteAbility>): void {
    if (item.payload) {
      setSlotFieldValue(slot, 'abilityName', item.payload.name);
    }
  }

  return (
    <DialogContent className='max-w-3xl'>
      <DialogHeader className='overflow-auto'>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName({ ...slot, pokemon })}</Typography.H3>
          <div className='flex gap-2 mr-5'>
            <TypeBadge type={pokemon.typeOneName} />
            {pokemon.typeTwoName !== 'empty' && <TypeBadge type={pokemon.typeTwoName} />}
          </div>
        </div>
        <DialogDescription>Customize your pokemon here. No need to save.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col items-start w-full gap-4 py-4'>
        <div className='flex items-center w-full gap-4'>
          <Label className='text-white min-w-[60px]' htmlFor='name'>
            Name
          </Label>
          <Input
            className='col-span-3 text-white'
            id='name'
            onChange={(e) => {
              setSlotFieldValue(slot, 'name', e.target.value);
            }}
            placeholder='Change the name here'
            value={slot.name || ''}
          />
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
        <div className='flex items-center w-full gap-4 '>
          <Label className='text-white min-w-[60px]' htmlFor='gender'>
            Gender
          </Label>
          <Combobox
            data={gendersData}
            disabled={gendersData.length < 2}
            onChange={handleGenderChange}
            value={
              gendersData.find((gender) => {
                return gender.payload === slot.gender;
              }) || gendersData[0]
            }
          />
        </div>
        <div className='flex items-center w-full gap-4'>
          <Label className='text-white min-w-[60px]' htmlFor='level'>
            Level
          </Label>
          <Input
            className='col-span-3 text-white'
            id='level'
            max={100}
            min={1}
            onChange={(e) => {
              setSlotFieldValue(slot, 'level', parseInt(e.target.value));
            }}
            type='number'
            value={slot.level}
          />
        </div>
        <div className='flex items-center w-full gap-4'>
          <Label className='text-white min-w-[60px]' htmlFor='happiness'>
            Happiness
          </Label>
          <Input
            className='col-span-3 text-white'
            id='happiness'
            max={100}
            min={1}
            onChange={(e) => {
              setSlotFieldValue(slot, 'happiness', parseInt(e.target.value));
            }}
            type='number'
            value={slot.happiness}
          />
        </div>
        <div className='flex items-center w-full gap-4 '>
          <Label className='text-white min-w-[60px]' htmlFor='gender'>
            Ability
          </Label>
          <Combobox
            data={abilitiesData}
            disabled={abilitiesData.length < 2}
            onChange={handleAbilityChange}
            value={abilitiesData.find((ability) => {
              return ability.payload.name === slot.abilityName;
            })}
          />
        </div>
      </div>
    </DialogContent>
  );
}
