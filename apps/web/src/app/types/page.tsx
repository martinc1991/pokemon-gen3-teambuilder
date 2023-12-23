'use client';

import PageHeader from '@components/page-header';
import { TypesChart } from '@components/types/types-chart';
import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';

export default function Types(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader description='Types chart. Hold over a multiplier for detailed explanation.' title='Types' />
      <TypesChart />
    </QueryClientProvider>
  );
}
