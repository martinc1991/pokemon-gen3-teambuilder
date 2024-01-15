import { DEFAULT_EVS, DEFAULT_IVS, JSONSlot, MAX_HAPPINESS, MAX_LEVEL } from 'contract';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { exportSlot } from '.';
import { calculateHiddenPowerType } from '../..';
import { formatString } from '../../../common';
import { getMovesText } from './moves';
import { getStatsText } from './stats';

vi.mock('../../../common', async (importOriginal) => {
  const mod = await importOriginal<typeof import('../../../common')>();
  return {
    ...mod,
  };
});

vi.mock('../../stats', () => {
  return {
    getShortStatName: vi.fn(),
  };
});

vi.mock('../../types', async (importOriginal) => {
  const mod = await importOriginal<typeof import('../../types')>();
  return {
    ...mod,
  };
});

vi.mock('./stats', () => {
  return {
    getStatsText: vi.fn(),
  };
});

vi.mock('./moves', () => {
  return {
    getMovesText: vi.fn(),
  };
});

const completeJsonSlot: JSONSlot = {
  nickname: 'nickname',
  species: 'species',
  moves: ['surf', 'rest', 'tackle', 'curse'],
  abilityName: 'ability-name',
  gender: 'female',
  happiness: MAX_HAPPINESS,
  itemName: 'item-name',
  level: MAX_LEVEL,
  nationalPokedexNumber: 123,
  natureName: 'adamant',
  shiny: false,
  ivs: DEFAULT_IVS,
  evs: DEFAULT_EVS,
};

describe('exportSlot', () => {
  let slot: JSONSlot;

  beforeEach(() => {
    slot = JSON.parse(JSON.stringify(completeJsonSlot)); // This method creates a new object without references to original, even nested ones (spred operator keeps references on nested objects)
    vi.clearAllMocks();
  });

  test('should add nickname only if provided', () => {
    const withNickname = exportSlot(slot);
    expect(withNickname).toContain(completeJsonSlot.nickname);

    slot.nickname = '';
    const withoutNickname = exportSlot(slot);
    expect(withoutNickname).not.toContain(completeJsonSlot.nickname);
  });
  test('should add gender only if male or female, but not genderless', () => {
    const femaleMark = '(F)';
    const maleMark = '(M)';
    const female = exportSlot(slot);
    expect(female).toContain(femaleMark);

    slot.gender = 'male';
    const male = exportSlot(slot);
    expect(male).toContain(maleMark);

    slot.gender = 'genderless';
    const genderless = exportSlot(slot);
    expect(genderless).not.toContain(femaleMark);
    expect(genderless).not.toContain(maleMark);
  });
  test('should add item only if provided', () => {
    const itemString = completeJsonSlot.itemName as string;
    const itemTag = '@';

    const withItem = exportSlot(slot);
    expect(withItem).toContain(formatString(itemString));
    expect(withItem).toContain(itemTag);

    slot.itemName = '';

    const withoutItem = exportSlot(slot);
    expect(withoutItem).not.toContain(itemString);
    expect(withoutItem).not.toContain(itemTag);
  });
  test('should add level only if different from 100', () => {
    const levelTag = 'Level:';

    const withoutLevel = exportSlot(slot);
    expect(withoutLevel).not.toContain(levelTag);

    slot.level = 85;
    const withLevel = exportSlot(slot);
    expect(withLevel).toContain(levelTag);
    expect(withLevel).toContain(slot.level);
  });
  test('should add shiny only if shiny is true', () => {
    const shinyTag = 'Shiny: Yes';

    const notShiny = exportSlot(slot);
    expect(notShiny).not.toContain(shinyTag);

    slot.shiny = true;
    const shiny = exportSlot(slot);
    expect(shiny).toContain(shinyTag);
  });
  test('should add happiness only if different from 255', () => {
    const happinessTag = 'Happiness:';

    const withoutHappiness = exportSlot(slot);
    expect(withoutHappiness).not.toContain(happinessTag);

    slot.happiness = 85;
    const withHappiness = exportSlot(slot);
    expect(withHappiness).toContain(happinessTag);
    expect(withHappiness).toContain(slot.happiness);
  });
  test('should not call getStatsText if every ev stat is 0 and every iv is 31', () => {
    exportSlot(slot);
    expect(getStatsText).not.toHaveBeenCalled();
  });
  test('if any ev is different from 0, should call getStatsText function with provided evs', () => {
    vi.mocked(getStatsText).mockResolvedValueOnce('');

    slot.evs.hp = 10;

    exportSlot(slot);

    expect(getStatsText).toHaveBeenCalledWith(slot.evs, 'ev');
    expect(getStatsText).toHaveBeenCalledOnce();
  });
  test('if any iv is different from 31, should call getStatsText function with provided ivs', () => {
    slot.ivs.hp = 10;
    exportSlot(slot);
    expect(getStatsText).toHaveBeenCalledWith(slot.ivs, 'iv');
    expect(getStatsText).toHaveBeenCalledOnce();
  });
  test('should not call getMovesText if no moves are provided', () => {
    slot.moves = [];
    exportSlot(slot);
    expect(getMovesText).not.toHaveBeenCalled();
  });
  test('should call getMovesText with provided moves', () => {
    exportSlot(slot);
    expect(getMovesText).toHaveBeenCalled();
    expect(getMovesText).toHaveBeenCalledWith(slot.moves, calculateHiddenPowerType(slot.ivs));
  });
});
