import { Input, Label } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface HappinessConfigFieldProps {
  slot: FilledSlot;
}

export default function HappinessConfigField({ slot }: HappinessConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='text-white min-w-[60px]' htmlFor='happiness'>
        Happiness
      </Label>
      <Input
        className='col-span-3 text-white'
        id='happiness'
        max={255}
        min={0}
        onChange={(e) => {
          setSlotFieldValue(slot, 'happiness', parseInt(e.target.value));
        }}
        type='number'
        value={slot.happiness}
      />
    </>
  );
}
