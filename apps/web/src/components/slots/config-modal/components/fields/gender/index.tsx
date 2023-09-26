import type { Gender } from 'contract';
import type { ComboboxItem } from 'ui';
import { Combobox, Label } from 'ui';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { capitalize } from '../../../../../../utils/common';
import { useTeamStore } from '../../../../../../state/team';

interface GenderConfigFieldProps {
  slot: FilledSlot;
}

export default function GenderConfigField({ slot }: GenderConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const gendersData = slot.pokemon.genders.map((gender) => ({
    id: gender.toString(),
    label: capitalize(gender.toString()),
    payload: gender,
  }));

  function handleGenderChange(item: ComboboxItem<Gender>): void {
    if (item.payload) {
      setSlotFieldValue(slot, 'gender', item.payload);
    }
  }

  return (
    <>
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
    </>
  );
}
