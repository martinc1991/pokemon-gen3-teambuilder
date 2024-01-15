import { formatString } from '../../../common';

export function getMovesText(moves: string[], hpType: string): string {
  let out = ``;

  for (let move of moves) {
    if (move) {
      if (move.toLowerCase().includes(`hidden`) && move.toLowerCase().includes(`power`)) {
        move = `Hidden Power [${formatString(hpType)}]`;
      }
      out += `- ${formatString(move)}  \n`;
    }
  }

  return out;
}
