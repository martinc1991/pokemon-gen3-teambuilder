import { MAX_HAPPINESS, MIN_HAPPINESS } from 'contract';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../state/team';
import type { FilledSlot } from '../../../../state/team/helpers';

interface HappinessFieldProps {
  slot: FilledSlot;
}

export default function HappinessField({ slot }: HappinessFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
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
