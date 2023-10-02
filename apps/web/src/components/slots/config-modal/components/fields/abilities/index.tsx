import type { CompleteAbility } from 'contract/dist/prisma/zod';
import type { ComboboxItem } from 'ui';
import { FormField } from 'ui';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';

interface AbilitiesConfigFieldProps {
  slot: FilledSlot;
}

export default function AbilitiesConfigField({ slot }: AbilitiesConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const abilitiesData = slot.pokemon.abilities.map((ability) => ({
    id: ability.name,
    label: ability.name.replace('-', ' '),
    payload: ability,
  }));

  function handleAbilityChange(item: ComboboxItem<CompleteAbility>): void {
    setSlotFieldValue(slot, 'abilityName', item.payload.name);
  }

  return (
    <FormField.Select
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
