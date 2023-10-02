import type { INature } from 'contract';
import { naturesArray } from 'contract';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../state/team';
import type { FilledSlot } from '../../../../state/team/helpers';
import { getShortStatName } from '../../../../utils/pokemon';

interface NatureFieldProps {
  slot: FilledSlot;
}

export default function NatureField({ slot }: NatureFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

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

export function getNatureSelectLabel({ name, decreased, increased }: INature): string {
  const basic = `${name.replace('-', ' ')}`;

  if (increased && decreased) {
    return `${basic} (+${getShortStatName(increased)} / -${getShortStatName(decreased)})`;
  }
  return basic;
}
