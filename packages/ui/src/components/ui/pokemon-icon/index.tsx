import { capitalizeFirstLetter, cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { SubstitutePlaceholder } from '../substitute-placeholder';

interface PokemonIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  iconUrl: string;
  name?: string;
}

export function PokemonIcon({ iconUrl, height = 40, name = '', ...props }: PokemonIconProps) {
  const [loaded, setLoaded] = useState(false);

  function toggleLoaded() {
    setLoaded(true);
  }
  function handleError() {
    console.log('Error loading img: ', iconUrl, name);
  }

  return (
    <div className='flex justify-center'>
      {!loaded && <SubstitutePlaceholder />}
      <Image
        className={cn('-mt-2 bg-transparent', loaded ? 'opacity-100' : 'opacity-0')}
        src={iconUrl}
        height={height}
        width={loaded ? height : 0}
        title={capitalizeFirstLetter(name)}
        alt={capitalizeFirstLetter(name)}
        onLoadingComplete={toggleLoaded}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
