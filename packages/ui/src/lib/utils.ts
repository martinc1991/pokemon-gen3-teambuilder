import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SEREBII_URL = 'https://www.serebii.net';

export function idToIconUrl(id: number, fetchStatic = false): string {
  const _id = id.toString().padStart(3, '0');
  if (id > 493 || fetchStatic) {
    return `${SEREBII_URL}/pokedex-sm/icon/${_id}.png`; // static (only until volcanion (721) )
  }
  return `${SEREBII_URL}/pokedex-rs/icon/${_id}.gif`; // animated gifs (only until arceus (493) )
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
