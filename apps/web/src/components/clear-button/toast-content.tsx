'use client';

import { useTeamStore } from '@state/team';
import { useTrashBinStore } from '@state/trashBin';
import { Button, Typography, useToast } from 'ui';
import { CLEAR_TOAST_TITLE } from './constants';

export default function ClearButtonToastContent(): JSX.Element {
  const [recoverFromTrash] = useTeamStore((state) => [state.recoverFromTrash]);
  const [team] = useTrashBinStore((state) => [state.team]);
  const { toast, dismiss, toasts } = useToast();

  function handleUndo(): void {
    if (team) {
      recoverFromTrash(team);

      toasts.forEach(({ id, title }) => {
        if (title === CLEAR_TOAST_TITLE) {
          dismiss(id);
        }
      });

      toast({
        title: 'Team recovered',
        description: "Don't worry, everithing is fine. You've got your team back.",
      });
    }
  }

  return (
    <div className='flex items-center gap-1'>
      <Typography.Word>Just kidding, of course it can be undone.</Typography.Word>
      <Button className='px-0' onClick={handleUndo} size='sm' variant='link'>
        Click here to undo.
      </Button>
    </div>
  );
}
