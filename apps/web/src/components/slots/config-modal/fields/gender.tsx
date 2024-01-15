import { useTeamStore } from '@state/team';
import type { Gender } from 'contract';
import { useMemo } from 'react';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { capitalize } from 'utils';
import { GenericFieldProps } from './types';

interface GenderFieldProps extends GenericFieldProps {
  gender: Gender;
}

export default function GenderField({ slotId, pokemon, gender }: GenderFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const gendersData = useMemo(
    () =>
      pokemon.genders.map((gender) => ({
        id: gender.toString(),
        label: capitalize(gender.toString()),
        payload: gender,
      })),
    [pokemon.genders],
  );

  function handleGenderChange(item: ComboboxItem<Gender>): void {
    setSlotFieldValue(slotId, 'gender', item.payload);
  }

  return (
    <FormField.Select
      containerClassName='flex-1'
      data={gendersData}
      disabled={gendersData.length < 2}
      name='gender'
      onChange={handleGenderChange}
      value={
        gendersData.find((g) => {
          return g.payload === gender;
        }) || gendersData[0]
      }
    />
  );
}
