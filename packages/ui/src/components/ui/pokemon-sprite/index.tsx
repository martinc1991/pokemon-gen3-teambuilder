import Image from 'next/image';
import { useEffect, useState } from 'react';
import substitute from '../../sprites/pokemon/substitute.png';

interface PokemonSpriteProps {
  alt?: string;
  url: string;
  size?: number;
}

export function PokemonSprite({ alt = '', url, size = 64 }: PokemonSpriteProps): JSX.Element {
  const [src, setSrc] = useState(substitute);
  const containerClassName = `w-[${size}px] h-[${size}px]`;

  useEffect(() => {
    setSrc(url);
  }, [url]);

  function replaceWithSubtitute(): void {
    setSrc(substitute);
  }

  return (
    <div className={containerClassName}>
      <Image alt={alt} height={size} priority quality={10} src={src} width={size} onError={replaceWithSubtitute} />
    </div>
  );
}
