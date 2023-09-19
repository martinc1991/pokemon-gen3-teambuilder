'use client';

import { PokemonAvatar, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { formatPokemonName } from '../../../utils/pokemon';
import BasicSidebar from '../basic-sidebar';

export default function RightSidebar(): JSX.Element {
  const [slots, removeSlot] = useTeamStore((state) => [state.slots, state.removeSlot]);

  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot) => {
        const iconUrl = slot.pokemon?.icon ?? null;
        const key = slot.slotId;
        const name = slot.name.length ? slot.name : formatPokemonName(slot.pokemon?.name ?? '');
        return (
          <PokemonAvatar
            iconUrl={iconUrl}
            key={key}
            name={name}
            onClick={() => {
              removeSlot(slot);
            }}
          />
        );
      })}
    </BasicSidebar>
  );
}
