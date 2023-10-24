'use client';

import LoadingState from '@components/loading-state';
import PageHeader from '@components/page-header';
import PokemonCard from '@components/slots/cards';
import SlotConfigModal from '@components/slots/config-modal';
import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dialog, DialogTrigger } from 'ui';

const queryClient = new QueryClient();

interface BuilderProps extends WithTeamStoreProps {}

function Builder({ teamStore }: BuilderProps): JSX.Element {
  const { slots, setSelectedSlotIndex } = teamStore;

  const areThereSlots = slots.length > 0;

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
        <div className='flex flex-wrap justify-center w-11/12 gap-6'>
          {areThereSlots
            ? slots.map((slot) => {
                return (
                  <DialogTrigger
                    key={slot.id}
                    onClick={() => {
                      handleSetSelectedSlotIndex(slot.order);
                    }}
                  >
                    <PokemonCard slot={slot} />
                  </DialogTrigger>
                );
              })
            : null}
        </div>
        {areThereSlots ? <SlotConfigModal /> : null}
      </Dialog>
    </QueryClientProvider>
  );
}

export default withTeamStore(Builder, <LoadingState />);
