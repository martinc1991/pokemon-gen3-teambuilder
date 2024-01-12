import { useTeamStore } from '@state/team';
import { MAX_LEVEL, MIN_LEVEL } from 'contract';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface LevelFieldProps extends Pick<GenericFieldProps, 'slotId'> {
  level: number;
}

export default function LevelField({ level, slotId }: LevelFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Number
      containerClassName='flex-1'
      max={MAX_LEVEL}
      min={MIN_LEVEL}
      name='level'
      onChange={(value: number) => {
        setSlotFieldValue(slotId, 'level', value);
      }}
      value={level}
    />
  );
}
