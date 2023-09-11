import type { Metadata } from 'next';
import { Button } from 'ui';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

export default function Builder(): JSX.Element {
  return (
    <div className='flex flex-col items-center min-h-screen p-2'>
      <h1>Home</h1>
      <Button>Hi</Button>
    </div>
  );
}
