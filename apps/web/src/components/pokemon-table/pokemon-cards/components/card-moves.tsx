import { Typography } from 'ui';

export default function PokemonCardMoves(): JSX.Element {
  return (
    <div className='flex flex-col flex-1 gap-2'>
      <Typography.H4>Moves</Typography.H4>
      <div className='flex flex-col gap-1'>
        {/* HARDCODED: */}
        <Typography.Small>-</Typography.Small>
        {/* HARDCODED: */}
        <Typography.Small>-</Typography.Small>
        {/* HARDCODED: */}
        <Typography.Small>-</Typography.Small>
        {/* HARDCODED: */}
        <Typography.Small>-</Typography.Small>
      </div>
    </div>
  );
}
