'use client';

import PageHeader from '@components/page-header';
import { SampleTeams } from '@components/sample-teams';
import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Typography } from 'ui';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

export default function Builder(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full'>
        <PageHeader description='This is the home: a place where you can chill and relax before anything.' title='Home' />
        <div className='w-full max-w-full flex flex-col gap-4 items-center'>
          <Typography.H3>Sample Teams</Typography.H3>
          <SampleTeams />
        </div>
      </div>
    </QueryClientProvider>
  );
}
