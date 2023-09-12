'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export default function BuilderLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col items-center w-5/6 min-h-screen gap-2 py-2'>{children}</div>
    </QueryClientProvider>
  );
}
