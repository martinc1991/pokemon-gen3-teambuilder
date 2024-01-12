import { useTeamStore } from '@state/team';
import { MAX_POKEMON_NAME_LENGTH } from 'contract';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface NameFieldProps extends Pick<GenericFieldProps, 'slotId'> {
  nickname: string;
}

export default function NameField({ slotId, nickname }: NameFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  return (
    <FormField.Text
      containerClassName='flex-1'
      name='name'
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= MAX_POKEMON_NAME_LENGTH) {
          setSlotFieldValue(slotId, 'nickname', e.target.value);
        }
      }}
      placeholder='Change the name here'
      value={nickname || ''}
    />
  );
}
