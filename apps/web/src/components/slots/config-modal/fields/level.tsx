import { useTeamStore } from '@state/team';
import { LocalSlot, MAX_LEVEL, MIN_LEVEL } from 'contract';
import { FormField } from 'ui';

interface LevelFieldProps {
  slot: LocalSlot;
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
