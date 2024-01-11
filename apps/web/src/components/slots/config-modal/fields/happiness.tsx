import { useTeamStore } from '@state/team';
import { MAX_HAPPINESS, MIN_HAPPINESS } from 'contract';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface HappinessFieldProps extends Pick<GenericFieldProps, 'slotId'> {
  happiness: number;
}

export default function HappinessField({ slotId, happiness }: HappinessFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
      containerClassName='flex-1'
      max={MAX_HAPPINESS}
      min={MIN_HAPPINESS}
      name='happiness'
      onChange={(value: number) => {
        setSlotFieldValue(slotId, 'happiness', value);
      }}
      value={happiness}
    />
  );
}
