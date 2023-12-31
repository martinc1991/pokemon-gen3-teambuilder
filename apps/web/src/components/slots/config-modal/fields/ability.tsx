import { useTeamStore } from '@state/team';
import type { Ability } from 'contract';
import { FilledSlot } from 'contract';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';

interface AbilityFieldProps {
  slot: FilledSlot;
}

export default function AbilityField({ slot }: AbilityFieldProps): JSX.Element {
  const setSlotFieldValue = useTeamStore((state) => state.setSlotFieldValue);

  const abilitiesData = slot.pokemon.abilities.map((ability) => ({
    id: ability.name,
    label: ability.name.replace('-', ' '),
    payload: ability,
  }));

  function handleAbilityChange(item: ComboboxItem<Ability>): void {
    setSlotFieldValue(slot, 'abilityName', item.payload.name);
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
        return ability.payload.name === slot.abilityName;
      })}
    />
  );
}
