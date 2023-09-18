import { Typography } from 'ui';

interface Props {
  abilities: { name: string; shortDescription: string }[];
}

export default function TableAbilities({ abilities }: Props) {
  const [first, ...rest] = abilities;

  return (
    <div className='flex flex-col items-center'>
      <Typography.Small className='capitalize'>{first.name.replaceAll('-', ' ')}</Typography.Small>
      <Typography.Small className='capitalize'>{rest.map(({ name }) => name.replaceAll('-', ' ')).join(' - ')}</Typography.Small>
    </div>
  );
}
