import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { JSONSlot } from 'contract';
import { useState } from 'react';
import { Button, useToast } from 'ui';
import { useCopyToClipboard, useInterval } from 'usehooks-ts';
import { exportTeam } from 'utils';
import CopyButtonToastContent from './toast-content';

interface CopyButtonProps {
  slots: JSONSlot[];
  teamName?: string;
}

export default function CopyButton({ slots, teamName }: CopyButtonProps): JSX.Element {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useInterval(
    () => {
      setCopied(false);
    },
    copied ? 10 * 1000 : null, // Delay in milliseconds or null to stop it
  );

  async function handleCopy(): Promise<void> {
    const txt = exportTeam(slots);
    await copy(txt);

    if (!copied) {
      toast({ title: teamName ? `${teamName} copied to clipboard` : 'Copied to clipboard', description: <CopyButtonToastContent /> });
    }
    setCopied(true);
  }

  return (
    <Button disabled={slots.length === 0} onClick={handleCopy} size='icon'>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
