import type { Tier } from 'contract';
import { capitalize } from '../common';

export function getTierText(tier: Tier): string {
  if (tier === 'uber') return capitalize(tier);
  return tier.toUpperCase();
}
