'use client';

import { MAX_TEAM_MEMBERS } from 'contract';
import { PokemonAvatar, Separator, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { BaseSlot, type FilledSlot } from '../../../state/team/helpers';
import { formatPokemonName } from '../../../utils/pokemon';
import BasicSidebar from '../basic-sidebar';
import CopyButton from '../../copy-button';

export default function RightSidebar(): JSX.Element {
  const [slots, removeSlot] = useTeamStore((state) => [state.slots, state.removeSlot]);

  function handleRemoveSlot(slot: FilledSlot): void {
    removeSlot(slot);
  }

  // Pad team to show always 6 slots
  const emptySlots = Array(MAX_TEAM_MEMBERS - slots.length).fill(new BaseSlot());

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
              handleRemoveSlot(slot);
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

      <Separator />
      <CopyButton />
    </BasicSidebar>
  );
}
