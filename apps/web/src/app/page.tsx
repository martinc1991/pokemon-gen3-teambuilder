'use client';

import PageHeader from '@components/page-header';
import { PageContent } from '@components/pages/page-content';
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
      <PageHeader description='This is the home: a place where you can chill and relax before anything.' title='Home' />
      <PageContent>
        <Typography.H3>Sample Teams</Typography.H3>
        <SampleTeams />
      </PageContent>
    </QueryClientProvider>
  );
}
