'use client';

import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { TableContent } from './components/table';

export function PokemonTable(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TableContent />
    </QueryClientProvider>
  );
}
