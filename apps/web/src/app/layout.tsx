'use client';

import LeftSidebar from '@components/sidebars/left-siderbar';
import RightSidebar from '@components/sidebars/right-sidebar';
import { queryClient } from '@rq-client/index';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import 'tailwind-config/global.css';
import { Toaster, TooltipProvider } from 'ui';
// include styles from the ui package
import 'ui/style';

export const metadata: Metadata = {
  title: 'Gen 3 Team Builder',
  description: 'Gen 3 Team Builder',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className='bg-zinc-900' lang='en'>
      <body className='flex flex-row'>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <LeftSidebar />
            <main className='flex justify-center flex-1'>
              <div className='flex flex-col items-center min-h-screen w-11/12'>{children}</div>
            </main>
            <RightSidebar />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
