'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TableContent } from './components/table';

const queryClient = new QueryClient();

export function PokemonTable(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TableContent />
    </QueryClientProvider>
  );
}
