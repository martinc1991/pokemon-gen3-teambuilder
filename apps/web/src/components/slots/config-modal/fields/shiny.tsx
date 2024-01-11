import { useTeamStore } from '@state/team';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface ShinyFieldProps extends Pick<GenericFieldProps, 'slotId'> {
  shiny: boolean;
}

export default function ShinyField({ slotId, shiny }: ShinyFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Checkbox
      checked={Boolean(shiny)}
      containerClassName='flex-1'
      name='shiny'
      onCheckedChange={(checked) => {
        const c = checked === true;
        setSlotFieldValue(slotId, 'shiny', c);
      }}
    />
  );
}
