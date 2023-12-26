'use client';

import LoadingState from '@components/loading-state';
import PageHeader from '@components/page-header';
import { EmptyPokemonCard, FilledPokemonCard } from '@components/slots/cards';
import SlotConfigModal from '@components/slots/config-modal';
import { queryClient } from '@rq-client/index';
import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-team-store';
import { BaseSlot } from '@state/team/helpers';
import { QueryClientProvider } from '@tanstack/react-query';
import { MAX_TEAM_MEMBERS } from 'contract';
import Link from 'next/link';
import { Button, Dialog, DialogTrigger, Typography } from 'ui';

interface BuilderProps extends WithTeamStoreProps {}

function Builder({ teamStore }: BuilderProps): JSX.Element {
  const { slots, setSelectedSlotIndex } = teamStore;

  const areThereSlots = slots.length > 0;
  const emptySlots = MAX_TEAM_MEMBERS - slots.length;

  function handleSetSelectedSlotIndex(index: number): void {
    setSelectedSlotIndex(index);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Dialog>
        <PageHeader
          description='Your current team. Click on one card to edit. When you are done, copy it from the right sidebar.'
          title='Team'
        />
        {areThereSlots ? (
          <div className='flex flex-wrap justify-center gap-6'>
            {slots.map((slot) => {
              return (
                <DialogTrigger
                  key={slot.id}
                  onClick={() => {
                    // FIX: este handler esta generando un bug al abrir el config modal
                    // de un pokemon diferente al del index que esta seleccionado
                    handleSetSelectedSlotIndex(slot.order);
                  }}
                >
                  <FilledPokemonCard slot={slot} />
                </DialogTrigger>
              );
            })}
            {Array(emptySlots)
              .fill(new BaseSlot())
              .map((_, i) => {
                return <EmptyPokemonCard key={i} />;
              })}
          </div>
        ) : (
          <EmptyState />
        )}

        {areThereSlots ? <SlotConfigModal /> : null}
      </Dialog>
    </QueryClientProvider>
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

export default withTeamStore(Builder, <LoadingState />);
