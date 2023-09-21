'use client';

import { PokemonAvatar, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { formatPokemonName } from '../../../utils/pokemon';
import BasicSidebar from '../basic-sidebar';
import type { TeamSlot } from '../../../state/team/helpers';

export default function RightSidebar(): JSX.Element {
  const [slots, removeSlot] = useTeamStore((state) => [state.slots, state.removeSlot]);

  function handleEmptySlot(slot: TeamSlot): void {
    if (slot.pokemon) removeSlot(slot);
  }

  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot) => {
        const iconUrl = slot.pokemon?.icon ?? null;
        const key = slot.slotId;
        const name = formatPokemonName(slot.pokemon?.name ?? '');
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
    </BasicSidebar>
  );
}
