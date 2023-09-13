import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'ui';

export default function RowDropdownMenu(): JSX.Element {
  return (
    <div className='flex flex-row justify-end'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='w-6 h-6 p-0' variant='ghost'>
            <span className='sr-only'>Open menu</span>
            <DotsHorizontalIcon className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
