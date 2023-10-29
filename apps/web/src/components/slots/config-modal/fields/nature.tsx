import { useTeamStore } from '@state/team';
import { getShortStatName } from '@utils/pokemon';
import type { FilledSlot, INature } from 'contract';
import { NATURES } from 'pokemon-info';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';

interface NatureFieldProps {
  slot: FilledSlot;
}

export default function NatureField({ slot }: NatureFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const naturesData: ComboboxItem<INature>[] = NATURES.map((nature) => {
    return { id: nature.name, label: getNatureSelectLabel(nature), payload: nature };
  });

  function handleItemChange(item: ComboboxItem<INature>): void {
    setSlotFieldValue(slot, 'natureName', item.payload.name);
  }

  return (
    <FormField.Select
      containerClassName='flex-1 max-w-xs'
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
