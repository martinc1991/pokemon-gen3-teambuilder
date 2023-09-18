import type { Gender } from 'contract';
import { Small } from '../typography';

interface GendersTextProps {
  genders: Gender[];
}

export function GendersText({ genders }: GendersTextProps) {
  return (
    <div className='flex gap-2'>
      {genders.includes('male') && <Small className='capitalize text-male'>Male</Small>}
      {genders.includes('female') && <Small className='capitalize text-female'>Female</Small>}
      {genders.includes('genderless') && <Small className='capitalize text-foreground'>Genderless</Small>}
    </div>
  );
}
