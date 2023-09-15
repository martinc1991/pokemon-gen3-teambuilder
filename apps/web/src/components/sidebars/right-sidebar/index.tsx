'use client';

import { Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import BasicSidebar from '../basic-sidebar';

export default function RightSidebar(): JSX.Element {
  const slots = useTeamStore((state) => state.slots);

  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot, i) => {
        return <Typography.Small key={slot.pokemon.id + i}>{slot.pokemon.name}</Typography.Small>;
      })}
    </BasicSidebar>
  );
}
