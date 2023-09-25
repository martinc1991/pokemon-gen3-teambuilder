import type { ITier } from 'contract';
import { capitalize } from '../common';

export function getTierText(tier: ITier): string {
  if (tier === 'uber') return capitalize(tier);
  return tier.toUpperCase();
}
