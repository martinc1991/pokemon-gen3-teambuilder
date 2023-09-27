import type { INatureGetAllResponseElement } from 'contract';
import type { ComboboxItem } from 'ui';
import { Combobox, Label } from 'ui';
import { client } from '../../../../../../rq-client';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { getNatureSelectLabel } from './helpers';

interface NatureConfigFieldProps {
  slot: FilledSlot;
}

export default function NatureConfigField({ slot }: NatureConfigFieldProps): JSX.Element {
  const { data, isFetching, error, isLoading } = client.natures.getAll.useQuery(['all-natures']);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  const naturesData: ComboboxItem<INatureGetAllResponseElement>[] = data.body.map((nature) => ({
    id: nature.name,
    label: getNatureSelectLabel(nature),
    payload: nature,
  }));

  function handleItemChange(item: ComboboxItem<INatureGetAllResponseElement>): void {
    setSlotFieldValue(slot, 'natureName', item.payload.name);
  }

  return (
    <>
      <Label className='text-white min-w-[60px]' htmlFor='nature'>
        Nature
      </Label>
      <Combobox
        className='min-w-[210px]'
        data={naturesData}
        disabled={isFetching || isLoading}
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
