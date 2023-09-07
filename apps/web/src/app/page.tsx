'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Button } from 'ui';
import Querier from './querier';

export const metadata: Metadata = {
  title: 'Web - Turborepo Example',
};

export const queryClient = new QueryClient();

export default function Home(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <Button>Hi</Button>
        <Querier />
      </div>
    </QueryClientProvider>
  );
}
