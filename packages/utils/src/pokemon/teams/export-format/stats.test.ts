import { DEFAULT_EVS, DEFAULT_IVS, StatID, StatsTable } from 'contract';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getStatsText } from './stats';
import { getShortStatName } from '../..';

vi.mock('../../stats', () => {
  return {
    getShortStatName: vi.fn().mockImplementation((stat: StatID) => {
      switch (stat) {
        case 'hp':
          return 'HP';
        case 'atk':
          return 'Atk';
        case 'def':
          return 'Def';
        case 'spa':
          return 'SpA';
        case 'spd':
          return 'SpD';
        case 'spe':
          return 'Spe';
      }
    }),
  };
});

describe.only('getStatsText', () => {
  let evs: StatsTable;
  let ivs: StatsTable;

  beforeEach(() => {
    evs = { ...DEFAULT_EVS };
    ivs = { ...DEFAULT_IVS };
    vi.clearAllMocks();
  });

  test('should return an empty string if every stat is equal to the default value', () => {
    const noEvsResult = getStatsText(evs, 'ev');
    const noIvsResult = getStatsText(ivs, 'iv');

    expect(noEvsResult).toBe('');
    expect(noIvsResult).toBe('');
  });
  test('should add the correct tag', () => {
    const evsTag = 'EVs:';
    const ivsTag = 'IVs:';

    evs.atk = 10;
    ivs.atk = 10;

    const evsResult = getStatsText(evs, 'ev');
    const ivsResult = getStatsText(ivs, 'iv');

    expect(evsResult).toContain(evsTag);
    expect(ivsResult).toContain(ivsTag);
  });
  test('should only add stats that are different from the default value', () => {
    evs.def = 10;
    evs.spe = 10;

    const evsResult = getStatsText(evs, 'ev');

    expect(evsResult).toContain(getShortStatName('def'));
    expect(evsResult).toContain(getShortStatName('spe'));

    expect(evsResult).not.toContain(getShortStatName('atk'));
    expect(evsResult).not.toContain(getShortStatName('spa'));
    expect(evsResult).not.toContain(getShortStatName('spd'));
    expect(evsResult).not.toContain(getShortStatName('hp'));
  });
  test('should split stats with " / "', () => {
    evs.def = 10;
    evs.spe = 10;
    evs.hp = 10;

    const presentStatsCount = Object.values(evs).filter((value) => value !== 0).length;
    const result = getStatsText(evs, 'ev');
    expect(result.split(' / ').length).toBe(presentStatsCount);
  });
});
