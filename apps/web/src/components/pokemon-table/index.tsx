'use client';

import { TableContent } from './components/table';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function PokemonTable(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TableContent />
    </QueryClientProvider>
  );
}
