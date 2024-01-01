import type { Tier } from 'contract';
import { capitalize } from 'utils';

export function getTierText(tier: Tier): string {
  if (tier === 'uber') return capitalize(tier);
  return tier.toUpperCase();
}
