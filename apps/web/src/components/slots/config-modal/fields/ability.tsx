import { useTeamStore } from '@state/team';
import type { Ability } from 'contract';
import { useMemo } from 'react';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { GenericFieldProps } from './types';

interface AbilityFieldProps extends GenericFieldProps {
  abilityName: string;
}

export default function AbilityField(props: AbilityFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const abilitiesData = useMemo(
    () =>
      props.pokemon.abilities.map((ability) => ({
        id: ability.name,
        label: ability.name.replace('-', ' '),
        payload: ability,
      })),
    [props.pokemon],
  );

  function handleAbilityChange(item: ComboboxItem<Ability>): void {
    console.log('🎈 ', 'action');
    setSlotFieldValue(props.slotId, 'abilityName', item.payload.name);
  }

  return (
    <FormField.Select
      containerClassName='flex-1 max-w-xs'
      data={abilitiesData}
      disabled={abilitiesData.length < 2}
      itemsClassName='capitalize'
      name='ability'
      onChange={handleAbilityChange}
      value={abilitiesData.find((ability) => {
        return ability.payload.name === props.abilityName;
      })}
    />
  );
}
