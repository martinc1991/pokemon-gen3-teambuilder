import type { IPokemon } from 'contract';
import Image from 'next/image';

interface PokemonSpriteProps {
  pokemon: IPokemon;
  size?: number;
}

export function PokemonSprite({ pokemon, size = 64 }: PokemonSpriteProps): JSX.Element {
  const containerClassName = `w-[${size}px] h-[${size}px]`;
  return (
    <div className={containerClassName}>
      <Image alt={pokemon.name} height={size} priority quality={10} src={pokemon.sprite} width={size} />
    </div>
  );
}
