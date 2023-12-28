'use client';

import Link from 'next/link';
import { Button } from 'ui';
import BasicSidebar from '../basic-sidebar';

export default function LeftSidebar(): JSX.Element {
  return (
    <BasicSidebar side='left'>
      <SidebarLink text='Home' href='/' />
      <SidebarLink text='Pokemon' href='/pokemon' />
      <SidebarLink text='Team' href='/team' />
      <SidebarLink text='Types' href='/types' />
    </BasicSidebar>
  );
}

interface SidebarLinkProps {
  href: string;
  text: string;
}

function SidebarLink({ href, text }: SidebarLinkProps): JSX.Element {
  return (
    <Link className='flex justify-center' href={href}>
      <Button variant='link'>{text}</Button>
    </Link>
  );
}
