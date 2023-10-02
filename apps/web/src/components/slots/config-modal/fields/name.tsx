import { MAX_POKEMON_NAME_LENGTH } from 'contract';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../state/team';
import type { FilledSlot } from '../../../../state/team/helpers';

interface NameFieldProps {
  slot: FilledSlot;
}

export default function NameField({ slot }: NameFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Text
      containerClassName='flex-1'
      name='name'
      onChange={(e) => {
        if (e.target.value.length <= MAX_POKEMON_NAME_LENGTH) {
          setSlotFieldValue(slot, 'name', e.target.value);
        }
      }}
      placeholder='Change the name here'
      value={slot.name || ''}
    />
  );
}
