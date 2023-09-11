import type { Metadata } from 'next';
import { Typography } from 'ui';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

export default function Builder(): JSX.Element {
  return (
    <div className='flex flex-col items-center min-h-screen p-2'>
      <Typography.H1>Home</Typography.H1>
      <Typography.P>This is the home: a place where you can chill and relax before anything.</Typography.P>
    </div>
  );
}
