import { ITier } from 'contract';

function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getTierText(tier: ITier): string {
  if (tier === 'uber') return capitalizeWord(tier);
  return tier.toUpperCase();
}
