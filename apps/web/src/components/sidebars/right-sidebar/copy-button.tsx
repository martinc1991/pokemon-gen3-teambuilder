'use client';

import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button, useToast } from 'ui';
import { useCopyToClipboard, useInterval } from 'usehooks-ts';
import { useTeamStore } from '../../../state/team';
import { parseTeam } from '../../../utils/pokemon/parse-team';

export default function CopyButton(): JSX.Element {
  const [slots] = useTeamStore((state) => [state.slots, state.removeSlot]);
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useInterval(
    () => {
      setCopied(false);
    },
    copied ? 10 * 1000 : null // Delay in milliseconds or null to stop it
  );

  async function handleCopy(): Promise<void> {
    const txt = parseTeam(slots);
    await copy(txt);

    toast({
      title: 'Copied to clipboard',
      variant: 'success',
    });
    setCopied(true);
  }

  return (
    <Button disabled={slots.length === 0} onClick={handleCopy} size='icon'>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
