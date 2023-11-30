'use client';

import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-store';
import { BaseSlot } from '@state/team/helpers';
import { formatPokemonName } from '@utils/pokemon';
import { FilledSlot, MAX_TEAM_MEMBERS } from 'contract';
import { PokemonAvatar, Separator } from 'ui';
import ClearButton from '../../clear-button';
import CopyButton from '../../copy-button';

interface RightSidebarContentProps extends WithTeamStoreProps {}

function RightSidebarContent({ teamStore }: RightSidebarContentProps): JSX.Element {
  const { slots, removeSlot } = teamStore;

  function handleRemoveSlot(slot: FilledSlot): void {
    removeSlot(slot);
  }

  // Pad team to show always 6 slots
  const emptySlots = Array(MAX_TEAM_MEMBERS - slots.length).fill(new BaseSlot());

  return (
    <>
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
            withBackground
          />
        );
      })}
      {emptySlots.map((_, i) => {
        const iconUrl = null;
        const key = `empty-slot-${i}`;
        const name = 'empty slot';
        return <PokemonAvatar iconUrl={iconUrl} key={key} name={name} withBackground />;
      })}

      <Separator />

      <CopyButton slots={slots} />
      <ClearButton />
    </>
  );
}

export default withTeamStore(RightSidebarContent, null);
