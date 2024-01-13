import { DEFAULT_EVS, DEFAULT_IVS, JSONSlot, MAX_HAPPINESS, MAX_LEVEL } from 'contract';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { exportSlot } from '.';
import { formatString } from '../../../common';

vi.mock('../../../common', () => {
  return {
    capitalize: vi.fn(),
    formatString: vi.fn(),
  };
});

vi.mock('../../stats', () => {
  return {
    getShortStatName: vi.fn(),
  };
});

vi.mock('../../types', () => {
  return {
    calculateHiddenPowerType: vi.fn(),
  };
});

const completeJsonSlot: JSONSlot = {
  nickname: 'nickname',
  species: 'species',
  moves: ['surf', 'rest', 'tackle', 'curse'],
  abilityName: 'abilityName',
  gender: 'female',
  happiness: MAX_HAPPINESS,
  itemName: 'itemName',
  level: MAX_LEVEL,
  nationalPokedexNumber: 123,
  natureName: 'adamant',
  shiny: false,
  ivs: DEFAULT_IVS,
  evs: DEFAULT_EVS,
};

// const statNameArray: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

function hyphenCount(str: string) {
  return str.split('-').length - 1;
}

describe('exportSlot', () => {
  let slot: JSONSlot;
  beforeEach(() => {
    slot = { ...completeJsonSlot };
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
    const withItem = exportSlot(slot);
    expect(withItem).toContain(formatString(itemString));

    slot.itemName = '';

    const withoutItem = exportSlot(slot);
    expect(withoutItem).not.toContain(itemString);
  });
  test('should add level only if different from 100', () => {
    const levelString = 'Level:';

    const withoutLevel = exportSlot(slot);
    expect(withoutLevel).not.toContain(levelString);

    slot.level = 85;
    const withLevel = exportSlot(slot);
    expect(withLevel).toContain(levelString);
    expect(withLevel).toContain(slot.level);
  });
  test('should add shiny only if shiny is true', () => {
    const shinyString = 'Shiny: Yes';

    const notShiny = exportSlot(slot);
    expect(notShiny).not.toContain(shinyString);

    slot.shiny = true;
    const shiny = exportSlot(slot);
    expect(shiny).toContain(shinyString);
  });
  test('should add happiness only if different from 255', () => {
    const happinessString = 'Happiness:';

    const withoutHappiness = exportSlot(slot);
    expect(withoutHappiness).not.toContain(happinessString);

    slot.happiness = 85;
    const withHappiness = exportSlot(slot);
    expect(withHappiness).toContain(happinessString);
    expect(withHappiness).toContain(slot.happiness);
  });
  test('should only add evs if any ev stat is different from 0', () => {
    const evsString = 'EVs:';

    const withoutEvs = exportSlot(slot);
    expect(withoutEvs).not.toContain(evsString);

    slot.evs.hp = 10;
    const withEvs = exportSlot(slot);
    expect(withEvs).toContain(evsString);
  });
  test('should only add evs for %s if provided value is different from 0', (stat) => {
    // TODO: extract this functionality into own function
  });
  test('should only add ivs for stats different from 31', () => {
    // TODO: extract this functionality into own function
  });
  test('should add as many lines of moves as moves are provided', () => {
    while (slot.moves.length > 0) {
      const withMoves = exportSlot(slot);
      const count = hyphenCount(withMoves);
      expect(count).toBe(slot.moves.length);
      slot.moves.pop();
    }
  });
  test('should not add any line if no moves are provided', () => {
    slot.moves = [];

    const withoutMoves = exportSlot(slot);
    const count = hyphenCount(withoutMoves);
    expect(count).toBe(slot.moves.length);
  });
  test('should handle the case of having hidden power', () => {
    // TODO: extract this functionality into own function
  });
});
