import {
  IBaseStats,
  MAX_ATK,
  MAX_DEF,
  MAX_HP,
  MAX_SPA,
  MAX_SPD,
  MAX_SPE,
  MIN_ATK,
  MIN_DEF,
  MIN_HP,
  MIN_SPA,
  MIN_SPD,
  MIN_SPE,
  StatID,
  StatName,
} from 'contract';
import { describe, expect, test } from 'vitest';
import {
  CalculateStatProps,
  StatsColors,
  calculateStat,
  getMinMaxStat,
  getShortStatName,
  getStatValueColor,
  getTotalBaseStat,
  getTotalEvs,
} from './index';

describe('getShortStatName', () => {
  test('should return the correct short stat name for every stat', () => {
    expect(getShortStatName(StatName.hp)).toBe('HP');
    expect(getShortStatName(StatName.attack)).toBe('Atk');
    expect(getShortStatName(StatName.defense)).toBe('Def');
    expect(getShortStatName(StatName.spattack)).toBe('SpA');
    expect(getShortStatName(StatName.spdefense)).toBe('SpD');
    expect(getShortStatName(StatName.speed)).toBe('Spe');
  });
  test('should return the correct short stat name for every base stat', () => {
    expect(getShortStatName('baseHp')).toBe('HP');
    expect(getShortStatName('baseAttack')).toBe('Atk');
    expect(getShortStatName('baseDefense')).toBe('Def');
    expect(getShortStatName('baseSpattack')).toBe('SpA');
    expect(getShortStatName('baseSpdefense')).toBe('SpD');
    expect(getShortStatName('baseSpeed')).toBe('Spe');
  });
  test('should return a hyphen (-) in any other case', () => {
    const expectedResult = '-';
    // @ts-expect-error - testing invalid input
    expect(getShortStatName('')).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName(0)).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName(6)).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName(undefined)).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName(null)).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName({})).toBe(expectedResult);
    // @ts-ignore - testing invalid input
    expect(getShortStatName([])).toBe(expectedResult);
  });
});

describe('getTotalBaseStat', () => {
  test('should return the correct total base stat value', () => {
    const baseStat: IBaseStats = {
      baseHp: 50,
      baseAttack: 75,
      baseDefense: 35,
      baseSpattack: 70,
      baseSpdefense: 30,
      baseSpeed: 40,
    };
    const expectedResult = 300;
    expect(getTotalBaseStat(baseStat)).toBe(expectedResult);
  });
});

describe('calculateStat', () => {
  const defaultInput: CalculateStatProps = {
    statName: 'attack',
    base: 50,
    ev: 100,
    iv: 15,
    level: 50,
    nature: { decreased: 'defense', increased: 'attack' },
  };
  test('should return the correct stat value for hp', () => {
    const input = { ...defaultInput, statName: StatName.hp };
    const expectedResult = 130;
    expect(calculateStat(input)).toBe(expectedResult);
  });
  test('should return the correct stat value other stats than hp', () => {
    const expectedResult = 82;
    expect(calculateStat(defaultInput)).toBe(expectedResult);
  });
  test('should return the correct stat value when nature is increased', () => {
    const expectedResult = 82;
    const input = { ...defaultInput };
    expect(calculateStat(input)).toBe(expectedResult);
  });
  test('should return the correct stat value when nature is neutral', () => {
    const expectedResult = 75;
    const input = { ...defaultInput, nature: { decreased: null, increased: null } };
    expect(calculateStat(input)).toBe(expectedResult);
  });
  test('should return the correct stat value when nature is decreased', () => {
    const expectedResult = 67;
    const input = { ...defaultInput, nature: { decreased: StatName.attack, increased: null } };
    expect(calculateStat(input)).toBe(expectedResult);
  });
});

describe('getTotalEvs', () => {
  test('should return the correct total base stat value', () => {
    const evs = {
      atk: 50,
      def: 75,
      hp: 35,
      spa: 70,
      spd: 30,
      spe: 40,
    };
    const expectedResult = 300;
    expect(getTotalEvs(evs)).toBe(expectedResult);
  });
});

describe('getMinMaxStat', () => {
  test('should return the correct max and min values for each stat', () => {
    const stats: StatID[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
    const expectedResults: { min: number; max: number }[] = [
      { min: MIN_HP, max: MAX_HP },
      { min: MIN_ATK, max: MAX_ATK },
      { min: MIN_DEF, max: MAX_DEF },
      { min: MIN_SPA, max: MAX_SPA },
      { min: MIN_SPD, max: MAX_SPD },
      { min: MIN_SPE, max: MAX_SPE },
    ];

    for (let i = 0; i < stats.length; i++) {
      expect(getMinMaxStat(stats[i])).toEqual(expectedResults[i]);
    }
  });
  test('should return min and max equal to 1 if no valid stat is passed', () => {
    // @ts-expect-error
    expect(getMinMaxStat('not-valid')).toEqual({ min: 1, max: 1 });
  });
});

describe('getStatValueColor', () => {
  const colors: StatsColors[] = [StatsColors.VERY_LOW, StatsColors.LOW, StatsColors.MID, StatsColors.HIGH, StatsColors.VERY_HIGH];
  test('should return a color for values between 0 and 100', () => {
    expect(colors).toContain(getStatValueColor(0));
    expect(colors).toContain(getStatValueColor(20));
    expect(colors).toContain(getStatValueColor(40));
    expect(colors).toContain(getStatValueColor(60));
    expect(colors).toContain(getStatValueColor(80));
    expect(colors).toContain(getStatValueColor(100));
  });
  test('should return "very high" color for values above 100', () => {
    expect(colors).toContain(getStatValueColor(Infinity));
    expect(colors).toContain(getStatValueColor(101));
    expect(colors).toContain(getStatValueColor(150));
  });
  test('should return "very low" color for values below 0', () => {
    expect(colors).toContain(getStatValueColor(-Infinity));
    expect(colors).toContain(getStatValueColor(-100));
    expect(colors).toContain(getStatValueColor(-1));
  });
});
