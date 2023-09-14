'use client';

import { SubstitutePlaceholder } from 'ui';

export default function LoadingState(): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center w-5/6 min-h-screen gap-2 py-2'>
      <SubstitutePlaceholder height={40} />
    </div>
  );
}
