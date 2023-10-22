import { useTeamStore } from '@state/team';
import { FilledSlot } from '@state/team/helpers';
import { MAX_LEVEL, MIN_LEVEL } from 'contract';
import { FormField } from 'ui';

interface LevelFieldProps {
  slot: FilledSlot;
}

export default function LevelField({ slot }: LevelFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
      containerClassName='flex-1'
      max={MAX_LEVEL}
      min={MIN_LEVEL}
      name='level'
      onChange={(value: number) => {
        setSlotFieldValue(slot, 'level', value);
      }}
      value={slot.level}
    />
  );
}
