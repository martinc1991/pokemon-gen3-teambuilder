import { MAX_LEVEL, MIN_LEVEL } from 'contract';
import { Input, Label } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface LevelConfigFieldProps {
  slot: FilledSlot;
}

export default function LevelConfigField({ slot }: LevelConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='min-w-[70px] text-right' htmlFor='level'>
        Level
      </Label>
      <Input
        id='level'
        max={MAX_LEVEL}
        min={MIN_LEVEL}
        onChange={(e) => {
          setSlotFieldValue(slot, 'level', parseInt(e.target.value));
        }}
        type='number'
        value={slot.level}
      />
    </>
  );
}
