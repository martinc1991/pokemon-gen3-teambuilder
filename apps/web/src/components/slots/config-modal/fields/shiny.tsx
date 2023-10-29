import { useTeamStore } from '@state/team';
import { FilledSlot } from 'contract';
import { FormField } from 'ui';

interface ShinyFieldProps {
  slot: FilledSlot;
}

export default function ShinyField({ slot }: ShinyFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Checkbox
      checked={Boolean(slot.shiny)}
      containerClassName='flex-1'
      name='shiny'
      onCheckedChange={(checked) => {
        const c = checked === true;
        setSlotFieldValue(slot, 'shiny', c);
      }}
    />
  );
}
