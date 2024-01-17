import withTeamStore, { WithTeamStoreProps } from '@state/team/with-team-store';
import { LocalSlot, MAX_TEAM_MEMBERS } from 'contract';
import { PokemonAvatar, Separator } from 'ui';
import { formatPokemonName, getPokemonIconUrl } from 'utils';
import ClearButton from '../../clear-button';
import CopyButton from '../../copy-button';

interface RightSidebarContentProps extends WithTeamStoreProps {}

function RightSidebarContent({ teamStore }: RightSidebarContentProps): JSX.Element {
  const { slots, removeSlot } = teamStore;

  function handleRemoveSlot(slot: LocalSlot): void {
    removeSlot(slot.meta.id);
  }

  // Pad team to show always 6 slots
  const emptySlots = Array(MAX_TEAM_MEMBERS - slots.length).fill(null);

  return (
    <>
      {slots.map((slot) => {
        const iconUrl = getPokemonIconUrl(slot.nationalPokedexNumber);
        const key = slot.meta.id;
        const name = formatPokemonName(slot.species);
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
