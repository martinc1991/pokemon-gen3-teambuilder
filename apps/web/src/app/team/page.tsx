'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dialog, DialogTrigger, Typography } from 'ui';
import PokemonCard from '../../components/slots/cards';
import SlotConfigModal from '../../components/slots/config-modal';
import { useTeamStore } from '../../state/team';
import { BUILDER_PAGE_HEADER_HEIGHT } from './constants';

const queryClient = new QueryClient();

export default function Builder(): JSX.Element {
  const [slots, setSelectedSlotIndex] = useTeamStore((state) => [state.slots, state.setSelectedSlotIndex]);

  const areThereSlots = slots.length > 0;

  function handleSetSelectedSlotIndex(index: number): void {
    setSelectedSlotIndex(index);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Dialog>
        <div className='flex flex-col items-center' style={{ height: BUILDER_PAGE_HEADER_HEIGHT }}>
          <Typography.H1>Team</Typography.H1>
          <Typography.P>Your current team</Typography.P>
        </div>
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
