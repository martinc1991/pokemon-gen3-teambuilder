'use client';

import { Typography } from 'ui';
import PokemonCard from '../../components/pokemon-table/pokemon-cards';
import { useTeamStore } from '../../state/team';
import type { FilledSlot } from '../../state/team/helpers';
import { BUILDER_PAGE_HEADER_HEIGHT } from './constants';

export default function Builder(): JSX.Element {
  const [slots] = useTeamStore((state) => [state.slots]);

  return (
    <>
      <div className='flex flex-col items-center' style={{ height: BUILDER_PAGE_HEADER_HEIGHT }}>
        <Typography.H1>Team</Typography.H1>
        <Typography.P>Your current team</Typography.P>
      </div>
      <div className='flex flex-wrap justify-center w-11/12 gap-6'>
        {slots
          .filter((s) => s.pokemon !== null)
          .map((slot) => {
            return <PokemonCard key={slot.slotId} slot={slot as FilledSlot} />;
          })}
      </div>
    </>
  );
}
