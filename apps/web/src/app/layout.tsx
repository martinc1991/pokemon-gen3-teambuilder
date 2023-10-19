'use client';

import type { Metadata } from 'next';
import 'tailwind-config/global.css';
import { Toaster } from 'ui';
// include styles from the ui package
import 'ui/style';
import LeftSidebar from '../components/sidebars/left-siderbar';
import RightSidebar from '../components/sidebars/right-sidebar';

export const metadata: Metadata = {
  title: 'Gen 3 Team Builder',
  description: 'Gen 3 Team Builder',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className='bg-zinc-900' lang='en'>
      <body className='flex flex-row'>
        <LeftSidebar />
        <main className='flex justify-center flex-1'>
          <div className='flex flex-col items-center flex-1 min-h-screen'>{children}</div>
        </main>
        <RightSidebar />
        <Toaster />
      </body>
    </html>
  );
}
