'use client';

import PageHeader from '@components/page-header';
import { TypesChart } from '@components/types/types-chart';
import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';

export default function Types(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader description='Types chart. Hold over a multiplier for detailed explanation.' title='Types' />
      <div className='flex flex-1 w-full justify-center items-center'>
        {/* TODO: add ofensive and defensive type texts */}
        {/* TODO: add filters */}
        <TypesChart />
        {/* TODO: add pokemon examples with that typing combination */}
      </div>
    </QueryClientProvider>
  );
}
