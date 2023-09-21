import { Typography } from 'ui';

interface TableAbilitiesProps {
  abilities: { name: string; shortDescription: string }[];
}

export default function TableAbilities({ abilities }: TableAbilitiesProps): JSX.Element {
  const [first, ...rest] = abilities;

  return (
    <div className='flex flex-col items-center'>
      <Typography.Small className='capitalize'>{first.name.replace('-', ' ')}</Typography.Small>
      <Typography.Small className='capitalize'>{rest.map(({ name }) => name.replace('-', ' ')).join(' - ')}</Typography.Small>
    </div>
  );
}
