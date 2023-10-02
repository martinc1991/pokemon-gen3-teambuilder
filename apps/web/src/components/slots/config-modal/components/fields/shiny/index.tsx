import { Checkbox, Label } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface ShinyConfigFieldProps {
  slot: FilledSlot;
}

export default function ShinyConfigField({ slot }: ShinyConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  return (
    <>
      <Label className='min-w-[70px] text-right' htmlFor='shiny'>
        Shiny
      </Label>
      <Checkbox
        checked={Boolean(slot.shiny)}
        id='shiny'
        onCheckedChange={(checked) => {
          const c = checked === true;
          setSlotFieldValue(slot, 'shiny', c);
        }}
      />
    </>
  );
}
