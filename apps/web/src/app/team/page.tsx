'use client';

import LoadingState from '@components/loading-state';
import PageHeader from '@components/page-header';
import { PageContent } from '@components/pages/page-content';
import { EmptyPokemonCard, FilledPokemonCard } from '@components/slots/cards';
import SlotConfigModal from '@components/slots/config-modal';
import withTeamStore, { WithTeamStoreProps } from '@state/team/with-team-store';
import { MAX_TEAM_MEMBERS } from 'contract';
import Link from 'next/link';
import { Button, Dialog, Typography } from 'ui';

interface BuilderProps extends WithTeamStoreProps {}

function Team({ teamStore }: BuilderProps): JSX.Element {
  const { slots, setSelectedSlotIndex } = teamStore;

  const areThereSlots = slots.length > 0;
  const emptySlots = MAX_TEAM_MEMBERS - slots.length;

  function handleSetSelectedSlotIndex(index: number): void {
    setSelectedSlotIndex(index);
  }

  if (!areThereSlots) return <EmptyState />;

  return (
    <>
      <Dialog>
        <PageHeader
          description='Your current team. Click on one card to edit. When you are done, copy it from the right sidebar.'
          title='Team'
        />
        <PageContent>
          <div className='flex flex-wrap justify-center gap-6'>
            {slots.map((slot, order) => {
              return (
                <FilledPokemonCard key={slot.meta.id} slot={slot} order={order} onEditClick={() => handleSetSelectedSlotIndex(order)} />
              );
            })}
            {Array(emptySlots)
              .fill(null)
              .map((_, i) => {
                return <EmptyPokemonCard key={i} />;
              })}
          </div>

          <SlotConfigModal />
        </PageContent>
      </Dialog>
    </>
  );
}

function EmptyState(): JSX.Element {
  return (
    <div className='flex flex-1 w-full justify-center items-center'>
      <Typography.Muted>No pokemon selected yet.</Typography.Muted>
      <Link href={`/pokemon`}>
        <Button className='px-2' variant='link'>
          Add some.
        </Button>
      </Link>
    </div>
  );
}

export default withTeamStore(Team, <LoadingState />);
