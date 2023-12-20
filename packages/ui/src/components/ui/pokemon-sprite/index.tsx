import type { Pokemon } from 'contract';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import substitute from '../../sprites/pokemon/substitute.png';

interface PokemonSpriteProps {
  pokemon: Pick<Pokemon, 'name' | 'sprite'>;
  size?: number;
}

export function PokemonSprite({ pokemon, size = 64 }: PokemonSpriteProps): JSX.Element {
  const [src, setSrc] = useState(substitute);
  const containerClassName = `w-[${size}px] h-[${size}px]`;

  useEffect(() => {
    setSrc(pokemon.sprite);
  }, [pokemon]);

  function replaceWithSubtitute(): void {
    setSrc(substitute);
  }

  return (
    <div className={containerClassName}>
      <Image alt={pokemon.name} height={size} priority quality={10} src={src} width={size} onError={replaceWithSubtitute} />
    </div>
  );
}
