import Link from 'next/link';
import { Button, useToast } from 'ui';

export function ToastContent(): JSX.Element {
  const { dismiss } = useToast();

  function handleClick(): void {
    dismiss();
  }

  return (
    <Link href='/team'>
      <Button size='sm' variant='link' className='p-0' onClick={handleClick}>
        Edit this team
      </Button>
    </Link>
  );
}
