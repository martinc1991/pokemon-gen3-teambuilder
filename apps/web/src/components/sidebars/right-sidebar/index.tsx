'use client';

import { PokemonAvatar, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import BasicSidebar from '../basic-sidebar';

export default function RightSidebar(): JSX.Element {
  const [slots, removeSlot] = useTeamStore((state) => [state.slots, state.removeSlot]);

  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot) => {
        const iconId = slot.pokemon?.nationalPokedexNumber ?? null;
        const key = slot.slotId;
        return (
          <PokemonAvatar
            iconId={iconId}
            key={key}
            onClick={() => {
              removeSlot(slot);
            }}
          />
        );
      })}
    </BasicSidebar>
  );
}
