import { client } from '@rq-client/index';
import { useTeamStore } from '@state/team';
import type { FilledSlot, IItemGetAllResponseElement } from 'contract';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';

interface ItemFieldProps {
  slot: FilledSlot;
}

export default function ItemField({ slot }: ItemFieldProps): JSX.Element {
  const { data, isFetching, error, isLoading } = client.items.getAll.useQuery(['all-items']);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  const itemsData: ComboboxItem<IItemGetAllResponseElement>[] = data.body.map((item) => ({
    id: item.name,
    label: item.name.replace('-', ' '),
    payload: item,
  }));

  function handleItemChange(item: ComboboxItem<IItemGetAllResponseElement>): void {
    setSlotFieldValue(slot, 'itemName', item.payload.name);
  }

  function handleRemoveitem(): void {
    setSlotFieldValue(slot, 'itemName', null);
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
        return ability.payload.name === slot.itemName;
      })}
    />
  );
}
