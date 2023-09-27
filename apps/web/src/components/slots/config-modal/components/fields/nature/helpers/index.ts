import type { INatureGetAllResponseElement } from 'contract';
import { getShortStatName } from '../../../../../../../utils/pokemon';

export function getNatureSelectLabel({ name, decreased, increased }: INatureGetAllResponseElement): string {
  const basic = `${name.replace('-', ' ')}`;

  if (increased && decreased) {
    return `${basic} (+${getShortStatName(increased)} / -${getShortStatName(decreased)})`;
  }
  return basic;
}
