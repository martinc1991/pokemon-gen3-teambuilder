import { getCardTitle } from '@utils/get-card-title';
import { LocalSlot } from 'contract';
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
  toast,
} from 'ui';

interface RemoveButtonProps {
  onRemoveClick: (slot: LocalSlot, order: number) => void;
  slot: LocalSlot;
  order: number;
  children: React.ReactNode;
}

export function RemovePokemonButton(props: RemoveButtonProps): JSX.Element {
  const descriptionTxt = `You are about to remove ${getCardTitle(props.slot, props.order, true)}.`;

  function handleClear(): void {
    props.onRemoveClick(props.slot, props.order);
    toast({
      title: `${getCardTitle(props.slot, props.order, true)} was removed.`,
      variant: 'destructive',
    });
  }

  return (
    <Dialog>
      <DialogTrigger>{props.children}</DialogTrigger>

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
              Remove
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
