import { MAX_HAPPINESS, MIN_HAPPINESS } from 'contract';
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
      <Label className='min-w-[60px]' htmlFor='happiness'>
        Happiness
      </Label>
      <Input
        className='col-span-3'
        id='happiness'
        max={MAX_HAPPINESS}
        min={MIN_HAPPINESS}
        onChange={(e) => {
          setSlotFieldValue(slot, 'happiness', parseInt(e.target.value));
        }}
        type='number'
        value={slot.happiness}
      />
    </>
  );
}
