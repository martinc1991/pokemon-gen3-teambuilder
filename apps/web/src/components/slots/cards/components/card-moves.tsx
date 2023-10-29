import { FilledSlot } from 'contract';
import { Typography } from 'ui';

interface PokemonCardStatsProps {
  slot: FilledSlot;
}

export default function PokemonCardMoves({ slot }: PokemonCardStatsProps): JSX.Element {
  return (
    <div className='flex flex-col items-start flex-1 gap-2'>
      <Typography.H4>Moves</Typography.H4>
      <div className='flex flex-col items-start gap-1'>
        <Typography.Small className='capitalize'>{slot.moveOneName || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moveTwoName || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moveThreeName || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moveFourName || '-'}</Typography.Small>
      </div>
    </div>
  );
}
