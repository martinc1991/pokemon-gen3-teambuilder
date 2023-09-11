'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Button } from 'ui';
import Querier from '../querier';

export const queryClient = new QueryClient();

export default function Builder(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col items-center min-h-screen py-2'>
        <h1>Builder</h1>

        <Button>Hi</Button>
        <Querier />
      </div>
    </QueryClientProvider>
  );
}
