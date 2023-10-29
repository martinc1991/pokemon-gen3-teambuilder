'use client';

import PageHeader from '@components/page-header';
import TeamCard from '@components/teams/card';
import type { Metadata } from 'next';
import { KIKE_TEAM, MY_TEAM, RED_TEAM, WHITNEY_TEAM, YOUNGTER_JOEY_TEAM } from 'pokemon-info';
import { Typography } from 'ui';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

const TEAMS = [RED_TEAM, MY_TEAM, YOUNGTER_JOEY_TEAM, WHITNEY_TEAM, KIKE_TEAM];

export default function Builder(): JSX.Element {
  return (
    <div className='w-full'>
      <PageHeader description='This is the home: a place where you can chill and relax before anything.' title='Home' />
      <div className='w-full max-w-full flex flex-col gap-4 items-center'>
        <Typography.H3>Sample Teams</Typography.H3>
        <div className='flex flex-wrap justify-center gap-6'>
          {TEAMS.length > 0 &&
            TEAMS.map((team, i) => {
              return <TeamCard key={`team-${i}`} team={team} />;
            })}
        </div>
      </div>
    </div>
  );
}
