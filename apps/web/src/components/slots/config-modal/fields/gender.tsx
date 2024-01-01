import { useTeamStore } from '@state/team';
import type { FilledSlot, Gender } from 'contract';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { capitalize } from 'utils';

interface GenderFieldProps {
  slot: FilledSlot;
}

export default function GenderField({ slot }: GenderFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const gendersData = slot.pokemon.genders.map((gender) => ({
    id: gender.toString(),
    label: capitalize(gender.toString()),
    payload: gender,
  }));

  function handleGenderChange(item: ComboboxItem<Gender>): void {
    setSlotFieldValue(slot, 'gender', item.payload);
  }

  return (
    <FormField.Select
      containerClassName='flex-1'
      data={gendersData}
      disabled={gendersData.length < 2}
      name='gender'
      onChange={handleGenderChange}
      value={
        gendersData.find((gender) => {
          return gender.payload === slot.gender;
        }) || gendersData[0]
      }
    />
  );
}
