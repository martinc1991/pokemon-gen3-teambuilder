import clsx from 'clsx';
import React from 'react';

interface BasicSideBarProps {
  side: 'right' | 'left';
  children: React.ReactNode;
}

export default function BasicSidebar({ children, side }: BasicSideBarProps): JSX.Element {
  return (
    <section
      className={clsx(
        `min-w-[70px] p-2 flex flex-col items-center gap-2 border-gray-400/50 h-screen sticky top-0`,
        side === 'right' ? 'border-l-[1px]' : 'border-r-[1px]',
      )}
    >
      {children}
    </section>
  );
}
