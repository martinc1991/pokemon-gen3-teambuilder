'use client';

import { PokemonAvatar, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { EmptySlot, type TeamSlot } from '../../../state/team/helpers';
import { formatPokemonName } from '../../../utils/pokemon';
import BasicSidebar from '../basic-sidebar';

export default function RightSidebar(): JSX.Element {
  const [slots, removeSlot] = useTeamStore((state) => [state.slots, state.removeSlot]);

  function handleEmptySlot(slot: TeamSlot): void {
    removeSlot(slot);
  }

  const emptySlots = Array(6 - slots.length).fill(new EmptySlot());

  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot) => {
        const iconUrl = slot.pokemon.icon;
        const key = slot.id;
        const name = formatPokemonName(slot.pokemon.name);
        return (
          <PokemonAvatar
            iconUrl={iconUrl}
            key={key}
            name={name}
            onClick={() => {
              handleEmptySlot(slot);
            }}
          />
        );
      })}
      {emptySlots.map((slot, i) => {
        const iconUrl = null;
        const key = `empty-slot-${i}`;
        const name = 'empty slot';
        return <PokemonAvatar iconUrl={iconUrl} key={key} name={name} />;
      })}
    </BasicSidebar>
  );
}
