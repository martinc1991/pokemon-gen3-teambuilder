import { capitalizeFirstLetter, cn, idToIconUrl } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { SubstitutePlaceholder } from './substitute-placeholder';

interface PokemonIconProps extends Omit<ImageProps, 'src' | 'alt'> {
  inputId: number;
  name?: string;
  fetchStatic?: boolean;
}

export function PokemonIcon({ inputId, height = 40, name = '', fetchStatic, ...props }: PokemonIconProps) {
  const [loaded, setLoaded] = useState(false);
  const icon = idToIconUrl(inputId, fetchStatic);

  function toggleLoaded() {
    setLoaded(true);
  }
  function handleError() {
    console.log('Error loading img: ', icon, name);
  }

  return (
    <div className='flex justify-center'>
      {!loaded && <SubstitutePlaceholder />}
      <Image
        className={cn('-mt-2 bg-transparent', loaded ? 'opacity-100' : 'opacity-0')}
        src={icon}
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
