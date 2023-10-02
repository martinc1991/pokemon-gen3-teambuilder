import { MAX_LEVEL, MIN_LEVEL } from 'contract';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../state/team';
import type { FilledSlot } from '../../../../state/team/helpers';

interface LevelFieldProps {
  slot: FilledSlot;
}

export default function LevelField({ slot }: LevelFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
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
