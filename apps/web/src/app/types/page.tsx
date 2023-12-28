'use client';

import PageHeader from '@components/page-header';
import { TypesChart } from '@components/types/types-chart';
import { queryClient } from '@rq-client/index';
import { useTypeChartStore } from '@state/type-chart';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function Types(): JSX.Element {
  const { resetState } = useTypeChartStore((state) => state);

  useEffect(() => {
    return () => {
      resetState(); // Reset selected types at unmount to start fresh next time
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PageHeader description='Types chart. Hold over a multiplier for detailed explanation.' title='Types' />
      <TypesChart />
    </QueryClientProvider>
  );
}
