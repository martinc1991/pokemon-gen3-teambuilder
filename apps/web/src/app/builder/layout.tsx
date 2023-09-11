'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export default function BuilderLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
