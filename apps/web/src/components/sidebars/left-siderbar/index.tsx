'use client';

import Link from 'next/link';
import { Button } from 'ui';
import BasicSidebar from '../basic-sidebar';

export default function LeftSidebar(): JSX.Element {
  return (
    <BasicSidebar side='left'>
      <Link className='flex justify-center' href='/'>
        <Button variant='link'>Home</Button>
      </Link>
      <Link className='flex justify-center' href='/builder'>
        <Button variant='link'>Builder</Button>
      </Link>
    </BasicSidebar>
  );
}
