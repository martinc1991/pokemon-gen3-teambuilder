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
        return (
          <PokemonAvatar
            inputId={slot.pokemon.nationalPokedexNumber}
            key={slot.pokemon.id}
            onClick={() => {
              removeSlot(slot.slotId);
            }}
          />
        );
      })}
    </BasicSidebar>
  );
}
