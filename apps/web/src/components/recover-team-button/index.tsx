import { useTeamStore } from '@state/team';
import { JSONTeam } from 'contract';
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
import { ToastContent } from './toast-content';

const descriptionTxt = 'This will replace your current team with the selected one.';

interface RecoverTeamButtonProps {
  team: JSONTeam;
}

export function SetTeamAsCurrent({ team }: RecoverTeamButtonProps): JSX.Element {
  const [slots, recoverFromTrash] = useTeamStore((state) => [state.slots, state.recoverFromTrash]);

  const { toast } = useToast();

  function recoverTeam(): void {
    recoverFromTrash(team);
    toast({
      title: `${team.name || 'Team'} set as current`,
      description: <ToastContent />,
    });
  }

  return (
    <Dialog>
      {slots.length > 0 ? (
        <DialogTrigger>
          <Button variant='outline'>Set as current</Button>
        </DialogTrigger>
      ) : (
        <Button variant='outline' onClick={recoverTeam}>
          Set as current
        </Button>
      )}
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
            <Button onClick={recoverTeam}>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
