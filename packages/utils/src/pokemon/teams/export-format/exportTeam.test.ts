import { RED_TEAM } from 'pokemon-info';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { exportSlot } from './exportSlot';
import { exportTeam } from './exportTeam';

vi.mock('./exportSlot', () => {
  return {
    exportSlot: vi.fn(),
  };
});

describe('exportTeam', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should return an empty string if no slots are provided', () => {
    expect(exportTeam([])).toBe('');
  });
  test('Should not call exportSlot if no slots are provided', () => {
    expect(exportSlot).toHaveBeenCalledTimes(0);
  });
  test('Should call exportSlot as many times as slots a team has', () => {
    exportTeam(RED_TEAM.slots);
    expect(exportSlot).toHaveBeenCalledTimes(RED_TEAM.slots.length);
  });
});
