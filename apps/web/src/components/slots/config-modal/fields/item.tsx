import { client } from '@rq-client/index';
import { useTeamStore } from '@state/team';
import type { Item } from 'contract';
import { useMemo } from 'react';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface ItemFieldProps extends GenericFieldProps {
  itemName: string | null;
}

export default function ItemField({ itemName, slotId }: ItemFieldProps): JSX.Element {
  const { data, isFetching, error, isLoading } = client.items.getAll.useQuery(['all-items']);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const itemsData: ComboboxItem<Item>[] = useMemo(() => {
    if (!data?.body) return [];

    return data?.body.map((item) => ({
      id: item.name,
      label: item.name.replace('-', ' '),
      payload: item,
    }));
  }, [data?.body]);

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  function handleItemChange(item: ComboboxItem<Item>): void {
    setSlotFieldValue(slotId, 'itemName', item.payload.name);
  }

  function handleRemoveitem(): void {
    setSlotFieldValue(slotId, 'itemName', null);
  }

  return (
    <FormField.Select
      clearButtonClassName='min-w-max'
      clearText='Remove item'
      cleareable
      containerClassName='flex-1 max-w-md'
      data={itemsData}
      disabled={isFetching || isLoading}
      itemsClassName='capitalize'
      name='item'
      onChange={handleItemChange}
      onClear={handleRemoveitem}
      searchBox
      value={itemsData.find((ability) => {
        return ability.payload.name === itemName;
      })}
    />
  );
}
