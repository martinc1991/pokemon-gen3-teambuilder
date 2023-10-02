import type { INature } from 'contract';
import { naturesArray } from 'contract';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { getNatureSelectLabel } from './helpers';

interface NatureConfigFieldProps {
  slot: FilledSlot;
}

export default function NatureConfigField({ slot }: NatureConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const naturesData: ComboboxItem<INature>[] = naturesArray.map((nature) => {
    return { id: nature.name, label: getNatureSelectLabel(nature), payload: nature };
  });

  function handleItemChange(item: ComboboxItem<INature>): void {
    setSlotFieldValue(slot, 'natureName', item.payload.name);
  }

  return (
    <FormField.Select
      data={naturesData}
      itemsClassName='capitalize'
      name='nature'
      onChange={handleItemChange}
      searchBox
      value={naturesData.find((nature) => {
        return nature.payload.name === slot.natureName;
      })}
    />
  );
}
