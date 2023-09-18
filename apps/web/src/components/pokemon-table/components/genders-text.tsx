import type { Gender } from 'contract';
import { Typography } from 'ui';

interface GendersTextProps {
  genders: Gender[];
}

export function GendersText({ genders }: GendersTextProps) {
  return (
    <div className='flex flex-col gap-1'>
      {genders.includes('male') && <Typography.Male className='capitalize'>Male</Typography.Male>}
      {genders.includes('female') && <Typography.Female className='capitalize'>Female</Typography.Female>}
      {genders.includes('genderless') && <Typography.Small className='capitalize'>Genderless</Typography.Small>}
    </div>
  );
}
