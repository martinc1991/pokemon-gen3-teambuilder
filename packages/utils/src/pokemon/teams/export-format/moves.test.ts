import { beforeEach, describe, expect, test, vi } from 'vitest';
import { formatString } from '../../../common';
import { getMovesText } from './moves';

vi.mock('../../../common', async (importOriginal) => {
  const mod = await importOriginal<typeof import('../../../common')>();
  return {
    ...mod,
  };
});

const movesArr: string[] = ['surf', 'rest', 'tackle', 'curse'];
const hiddenPower = 'hidden-power';

function hyphenCount(str: string) {
  return str.split('-').length - 1;
}

describe('movesArr', () => {
  let moves: string[];

  beforeEach(() => {
    moves = [...movesArr];
    vi.clearAllMocks();
  });

  test('should add as many lines of moves as moves are provided', () => {
    while (moves.length > 0) {
      const withMoves = getMovesText(moves, 'dark');
      const count = hyphenCount(withMoves);

      expect(count).toBe(moves.length);
      moves.pop();
    }
  });
  test('should not add any line if no moves are provided', () => {
    moves = [];

    const withoutMoves = getMovesText(moves, 'dark');
    const count = hyphenCount(withoutMoves);
    expect(count).toBe(0);
  });
  test('should handle the case of having hidden power', () => {
    moves[3] = hiddenPower;
    const withHiddenPower = getMovesText(moves, 'dark');

    expect(withHiddenPower).toContain(formatString(hiddenPower));
  });
  test('should handle the case of different hidden power types', () => {
    moves = [hiddenPower];
    const types = ['fire', 'grass', 'water', 'electric'];

    types.forEach((type) => {
      const withHiddenPower = getMovesText(moves, type);
      expect(withHiddenPower).toContain(`[${formatString(type)}]`);
    });
  });
});
