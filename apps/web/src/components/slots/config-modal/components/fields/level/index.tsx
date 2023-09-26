import { Label, Input } from 'ui';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { useTeamStore } from '../../../../../../state/team';

interface LevelConfigFieldProps {
  slot: FilledSlot;
}

export default function LevelConfigField({ slot }: LevelConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='text-white min-w-[60px]' htmlFor='level'>
        Level
      </Label>
      <Input
        className='col-span-3 text-white'
        id='level'
        max={100}
        min={1}
        onChange={(e) => {
          setSlotFieldValue(slot, 'level', parseInt(e.target.value));
        }}
        type='number'
        value={slot.level}
      />
    </>
  );
}
