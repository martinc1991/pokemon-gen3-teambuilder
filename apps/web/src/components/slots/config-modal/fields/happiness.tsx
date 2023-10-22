import { useTeamStore } from '@state/team';
import { FilledSlot } from '@state/team/helpers';
import { MAX_HAPPINESS, MIN_HAPPINESS } from 'contract';
import { FormField } from 'ui';

interface HappinessFieldProps {
  slot: FilledSlot;
}

export default function HappinessField({ slot }: HappinessFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
      containerClassName='flex-1'
      max={MAX_HAPPINESS}
      min={MIN_HAPPINESS}
      name='happiness'
      onChange={(value: number) => {
        setSlotFieldValue(slot, 'happiness', value);
      }}
      value={slot.happiness}
    />
  );
}
