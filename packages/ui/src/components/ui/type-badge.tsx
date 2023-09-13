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

const imgSources: { [key in TypeNames]: string } = {
  normal,
  ice,
  ghost,
  dark,
  grass,
  electric,
  steel,
  ground,
  fighting,
  bug,
  poison,
  rock,
  water,
  flying,
  fire,
  dragon,
  psychic,
  empty: unknown, // TODO: fix the empty-unknown mismatch
};

interface TypeBadgeProps extends Omit<ImageProps, 'src' | 'alt'> {
  type: TypeNames;
}

const DEFAULT_HEIGHT = 14;
const DEFAULT_WIDTH = 32;
const DEFAULT_IMG_PRIORITY = false;

export function TypeBadge({
  type = TypeNames.empty,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  priority = DEFAULT_IMG_PRIORITY,
  ...otherProps
}: TypeBadgeProps) {
  const alt = `Type badge ${type}`;
  const props = {
    height,
    width,
    priority,
    alt,
    title: alt,
    src: imgSources[type],
    ...otherProps,
  };

  return <Image {...props} />;
}
