import Image, { ImageProps } from 'next/image';
import bug from '../sprites/types/icons/bug.gif';
import dark from '../sprites/types/icons/dark.gif';
import dragon from '../sprites/types/icons/dragon.gif';
import electric from '../sprites/types/icons/electric.gif';
import fighting from '../sprites/types/icons/fighting.gif';
import fire from '../sprites/types/icons/fire.gif';
import flying from '../sprites/types/icons/flying.gif';
import ghost from '../sprites/types/icons/ghost.gif';
import grass from '../sprites/types/icons/grass.gif';
import ground from '../sprites/types/icons/ground.gif';
import ice from '../sprites/types/icons/ice.gif';
import normal from '../sprites/types/icons/normal.gif';
import poison from '../sprites/types/icons/poison.gif';
import psychic from '../sprites/types/icons/psychic.gif';
import rock from '../sprites/types/icons/rock.gif';
import steel from '../sprites/types/icons/steel.gif';
import unknown from '../sprites/types/icons/unknown.gif';
import water from '../sprites/types/icons/water.gif';

const enum TypeNames {
  normal = 'normal',
  ice = 'ice',
  ghost = 'ghost',
  dark = 'dark',
  grass = 'grass',
  electric = 'electric',
  steel = 'steel',
  ground = 'ground',
  fighting = 'fighting',
  bug = 'bug',
  poison = 'poison',
  rock = 'rock',
  water = 'water',
  flying = 'flying',
  fire = 'fire',
  dragon = 'dragon',
  psychic = 'psychic',
  empty = 'empty',
}

interface TypeBadgeProps extends Omit<ImageProps, 'src' | 'alt'> {
  type: string;
}

const DEFAULT_HEIGHT = 14;
const DEFAULT_WIDTH = 32;

export function TypeBadge({
  type = 'unknown',
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  priority = false,
  ...props
}: TypeBadgeProps) {
  switch (type) {
    case TypeNames.bug:
      return <Image src={bug} height={height} width={width} alt='badge-bug' priority={priority} {...props} />;
    case TypeNames.dark:
      return <Image src={dark} height={height} width={width} alt='badge-dark' priority={priority} {...props} />;
    case TypeNames.dragon:
      return <Image src={dragon} height={height} width={width} alt='badge-dragon' priority={priority} {...props} />;
    case TypeNames.electric:
      return <Image src={electric} height={height} width={width} alt='badge-electric' priority={priority} {...props} />;
    case TypeNames.fighting:
      return <Image src={fighting} height={height} width={width} alt='badge-fighting' priority={priority} {...props} />;
    case TypeNames.fire:
      return <Image src={fire} height={height} width={width} alt='badge-fire' priority={priority} {...props} />;
    case TypeNames.flying:
      return <Image src={flying} height={height} width={width} alt='badge-flying' priority={priority} {...props} />;
    case TypeNames.ghost:
      return <Image src={ghost} height={height} width={width} alt='badge-ghost' priority={priority} {...props} />;
    case TypeNames.grass:
      return <Image src={grass} height={height} width={width} alt='badge-grass' priority={priority} {...props} />;
    case TypeNames.ground:
      return <Image src={ground} height={height} width={width} alt='badge-ground' priority={priority} {...props} />;
    case TypeNames.ice:
      return <Image src={ice} height={height} width={width} alt='badge-ice' priority={priority} {...props} />;
    case TypeNames.normal:
      return <Image src={normal} height={height} width={width} alt='badge-normal' priority={priority} {...props} />;
    case TypeNames.poison:
      return <Image src={poison} height={height} width={width} alt='badge-poison' priority={priority} {...props} />;
    case TypeNames.psychic:
      return <Image src={psychic} height={height} width={width} alt='badge-psychic' priority={priority} {...props} />;
    case TypeNames.rock:
      return <Image src={rock} height={height} width={width} alt='badge-rock' priority={priority} {...props} />;
    case TypeNames.steel:
      return <Image src={steel} height={height} width={width} alt='badge-steel' priority={priority} {...props} />;
    case TypeNames.water:
      return <Image src={water} height={height} width={width} alt='badge-water' priority={priority} {...props} />;

    // case TypeNames.UNKNOWN:
    default:
      return <Image src={unknown} height={height} width={width} alt='' priority={priority} {...props} />;
  }
}
