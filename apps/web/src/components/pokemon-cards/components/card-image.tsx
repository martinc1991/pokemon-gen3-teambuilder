import type { IPokemon } from 'contract';
import Image from 'next/image';

interface PokemonCardImageProps {
  pokemon: IPokemon;
}

export default function PokemonCardImage({ pokemon }: PokemonCardImageProps): JSX.Element {
  return (
    <div className='w-[64px] flex justify-center items-center'>
      <Image alt={pokemon.name} height={64} priority quality={10} src={pokemon.sprite} width={64} />
    </div>
  );
}
