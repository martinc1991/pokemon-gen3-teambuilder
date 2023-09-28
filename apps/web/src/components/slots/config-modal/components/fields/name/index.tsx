import { Label, Input } from 'ui';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { useTeamStore } from '../../../../../../state/team';

interface NameConfigFieldProps {
  slot: FilledSlot;
}

export default function NameConfigField({ slot }: NameConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='min-w-[60px]' htmlFor='name'>
        Name
      </Label>
      <Input
        className='col-span-3'
        id='name'
        onChange={(e) => {
          setSlotFieldValue(slot, 'name', e.target.value);
        }}
        placeholder='Change the name here'
        value={slot.name || ''}
      />
    </>
  );
}
