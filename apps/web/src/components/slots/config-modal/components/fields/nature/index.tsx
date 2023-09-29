import type { INature } from 'contract';
import { naturesArray } from 'contract';
import type { ComboboxItem } from 'ui';
import { Combobox, Label } from 'ui';
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
    <>
      <Label className='min-w-[60px]' htmlFor='nature'>
        Nature
      </Label>
      <Combobox
        className='min-w-[210px]'
        data={naturesData}
        itemsClassName='capitalize'
        onChange={handleItemChange}
        searchBox
        value={naturesData.find((nature) => {
          return nature.payload.name === slot.natureName;
        })}
      />
    </>
  );
}
