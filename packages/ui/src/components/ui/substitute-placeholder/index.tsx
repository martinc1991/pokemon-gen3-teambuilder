import Image, { ImageProps } from 'next/image';
import substitute from '../../sprites/pokemon/substitute.png';

type SubstitutePlaceholderProps = Omit<ImageProps, 'src' | 'alt'>;

const DEFAULT_HEIGHT = 30;

export function SubstitutePlaceholder({ height = DEFAULT_HEIGHT, ...props }: SubstitutePlaceholderProps) {
  return (
    <div className='flex justify-center'>
      <Image {...props} src={substitute} height={height} width={height} title={'substitute'} alt='substitute' />
    </div>
  );
}
