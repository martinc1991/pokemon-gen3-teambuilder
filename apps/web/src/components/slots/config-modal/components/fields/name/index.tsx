import { MAX_POKEMON_NAME_LENGTH } from 'contract';
import { Input, Label } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface NameConfigFieldProps {
  slot: FilledSlot;
}

export default function NameConfigField({ slot }: NameConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='min-w-[70px] text-right' htmlFor='name'>
        Name
      </Label>
      <Input
        id='name'
        onChange={(e) => {
          if (e.target.value.length < MAX_POKEMON_NAME_LENGTH) {
            setSlotFieldValue(slot, 'name', e.target.value);
          }
        }}
        placeholder='Change the name here'
        value={slot.name || ''}
      />
    </>
  );
}
