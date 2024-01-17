'use client';

import PageHeader from '@components/page-header';
import { PageContent } from '@components/pages/page-content';
import { TypesChart } from '@components/types/types-chart';
import { useTypeChartStore } from '@state/type-chart';
import { useEffect } from 'react';

export default function Types(): JSX.Element {
  const { resetState } = useTypeChartStore((state) => state);

  useEffect(() => {
    return () => {
      resetState(); // Reset selected types at unmount to start fresh next time
    };
  }, []);

  return (
    <>
      <PageHeader description='Types chart. Hold over a multiplier for detailed explanation.' title='Types' />
      <PageContent>
        <TypesChart />
      </PageContent>
    </>
  );
}
