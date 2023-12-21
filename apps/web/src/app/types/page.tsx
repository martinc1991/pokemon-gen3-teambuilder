'use client';

import PageHeader from '@components/page-header';
import { TypesChart } from '@components/types/types-chart';
import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

export default function Types(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader description='Types chart.' title='Types' />
      <div className='flex flex-1 w-full justify-center items-center'>
        {/* TODO: add ofensive and defensive type texts */}
        {/* TODO: add filters */}
        <TypesChart />
        {/* TODO: add pokemon examples with that typing combination */}
      </div>
    </QueryClientProvider>
  );
}
