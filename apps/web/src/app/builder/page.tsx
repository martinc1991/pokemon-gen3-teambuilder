'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Typography } from 'ui';
import Querier from '../querier';

export const queryClient = new QueryClient();

export default function Builder(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col items-center min-h-screen py-2'>
        <Typography.H1>Builder</Typography.H1>

        <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>
        <Querier />
      </div>
    </QueryClientProvider>
  );
}
