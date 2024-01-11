import { LocalSlot } from 'contract';
import { Typography } from 'ui';

interface PokemonCardStatsProps {
  slot: LocalSlot;
}

export default function PokemonCardMoves({ slot }: PokemonCardStatsProps): JSX.Element {
  return (
    <div className='flex flex-col items-start flex-1 gap-2'>
      <Typography.H4>Moves</Typography.H4>
      <div className='flex flex-col items-start gap-1'>
        <Typography.Small className='capitalize'>{slot.moves[0] || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moves[1] || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moves[2] || '-'}</Typography.Small>
        <Typography.Small className='capitalize'>{slot.moves[3] || '-'}</Typography.Small>
      </div>
    </div>
  );
}
