import { useTeamStore } from '@state/team';
import type { Nature, NatureNames } from 'contract';
import { NATURES } from 'pokemon-info';
import { useMemo } from 'react';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { getShortStatName } from 'utils';
import { GenericFieldProps } from './types';

interface NatureFieldProps extends Pick<GenericFieldProps, 'slotId'> {
  natureName: NatureNames;
}

export default function NatureField({ natureName, slotId }: NatureFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const naturesData: ComboboxItem<Nature>[] = useMemo(
    () =>
      NATURES.map((nature) => {
        return { id: nature.name, label: getNatureSelectLabel(nature), payload: nature };
      }),
    [NATURES],
  );

  function handleItemChange(item: ComboboxItem<Nature>): void {
    setSlotFieldValue(slotId, 'natureName', item.payload.name);
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
        return nature.payload.name === natureName;
      })}
    />
  );
}

export function getNatureSelectLabel({ name, decreased, increased }: Nature): string {
  const basic = `${name.replace('-', ' ')}`;

  if (increased && decreased) {
    return `${basic} (+${getShortStatName(increased)} / -${getShortStatName(decreased)})`;
  }
  return basic;
}
