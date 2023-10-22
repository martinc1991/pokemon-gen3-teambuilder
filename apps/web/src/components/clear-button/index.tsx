'use client';

import { TrashIcon } from '@radix-ui/react-icons';
import { useTeamStore } from '@state/team';
import { useTrashBinStore } from '@state/trashBin';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useToast,
} from 'ui';
import { CLEAR_TOAST_TITLE } from './constants';
import ClearButtonToastContent from './toast-content';

const descriptionTxt = "This will clear your current team and this action can't be undone.";

export default function ClearButton(): JSX.Element {
  const [slots, name, teamId, clearTeam] = useTeamStore((state) => [state.slots, state.name, state.teamId, state.clearTeam]);
  const [addToTrash] = useTrashBinStore((state) => [state.add]);
  const { toast } = useToast();

  const buttonDisabled = slots.length < 1;

  function handleClear(): void {
    addToTrash({ slots, name, teamId });
    clearTeam();
    toast({
      title: CLEAR_TOAST_TITLE,
      description: <ClearButtonToastContent />,
      variant: 'destructive',
    });
  }

  return (
    <Dialog>
      {/* INFO: see comment at the end of the file */}
      <Button disabled={buttonDisabled} size='icon' variant='destructive'>
        <DialogTrigger asChild disabled={buttonDisabled}>
          <TrashIcon className='h-9 w-9 p-[9px]' />
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogDescription>{descriptionTxt}</DialogDescription>
        <DialogFooter>
          <DialogClose>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button onClick={handleClear} variant='destructive'>
              Clear
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// INFO:
// Because of this (https://nextjs.org/docs/messages/react-hydration-error) i had to do this workaround:
// Render the dialog trigger as a child of the button, but doing so not all the button would trigger the dialog on click
// As only the icon part would do, so i used padding on the icon to fill all the space on the button
// And doing so, making the whole "button" (is the dialog trigger really) trigger the dialog
