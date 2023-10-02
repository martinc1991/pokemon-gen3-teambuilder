import type { IItemGetAllResponseElement } from 'contract';
import type { ComboboxItem } from 'ui';
import { Combobox, Label } from 'ui';
import { client } from '../../../../../../rq-client';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface ItemConfigFieldProps {
  slot: FilledSlot;
}

export default function ItemConfigField({ slot }: ItemConfigFieldProps): JSX.Element {
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
    <>
      <Label className='min-w-[70px] text-right' htmlFor='item'>
        Item
      </Label>
      <Combobox
        className='min-w-[200px]'
        clearButtonClassName='min-w-max'
        clearText='Remove item'
        cleareable
        data={itemsData}
        disabled={isFetching || isLoading}
        itemsClassName='capitalize'
        onChange={handleItemChange}
        onClear={handleRemoveitem}
        searchBox
        value={itemsData.find((ability) => {
          return ability.payload.name === slot.itemName;
        })}
      />
    </>
  );
}
