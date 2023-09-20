'use client';

import { Typography } from 'ui';
import { PokemonTable } from '../../components/pokemon-table';
import { BUILDER_PAGE_HEADER_HEIGHT } from './constants';

export default function Builder(): JSX.Element {
  return (
    <>
      <div className='flex flex-col items-center' style={{ height: BUILDER_PAGE_HEADER_HEIGHT }}>
        <Typography.H1>Builder</Typography.H1>
        <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>
      </div>
      <PokemonTable />
    </>
  );
}
