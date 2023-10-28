'use client';

import Link from 'next/link';
import { Button } from 'ui';

export function ToastContent(): JSX.Element {
  return (
    <Link href='/team'>
      <Button size='sm' variant='link' className='p-0'>
        Edit this team
      </Button>
    </Link>
  );
}
