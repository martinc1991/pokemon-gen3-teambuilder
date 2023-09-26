import type { CompleteAbility } from 'contract/dist/prisma/zod';
import type { ComboboxItem } from 'ui';
import { Combobox, Label } from 'ui';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import { useTeamStore } from '../../../../../../state/team';
import { capitalize } from '../../../../../../utils/common';

interface AbilitiesConfigFieldProps {
  slot: FilledSlot;
}

export default function AbilitiesConfigField({ slot }: AbilitiesConfigFieldProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const abilitiesData = slot.pokemon.abilities.map((ability) => ({ id: ability.name, label: capitalize(ability.name), payload: ability }));

  function handleAbilityChange(item: ComboboxItem<CompleteAbility>): void {
    if (item.payload) {
      setSlotFieldValue(slot, 'abilityName', item.payload.name);
    }
  }

  return (
    <>
      <Label className='text-white min-w-[60px]' htmlFor='ability'>
        Ability
      </Label>
      <Combobox
        data={abilitiesData}
        disabled={abilitiesData.length < 2}
        onChange={handleAbilityChange}
        value={abilitiesData.find((ability) => {
          return ability.payload.name === slot.abilityName;
        })}
      />
    </>
  );
}
