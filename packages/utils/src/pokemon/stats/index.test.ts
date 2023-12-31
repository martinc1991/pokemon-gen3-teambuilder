import { IBaseStats, StatName } from 'contract';
import { describe, expect, test } from 'vitest';
import { CalculateStatProps, calculateStat, getShortStatName, getTotalBaseStat, getTotalEvs } from './index';

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
      evAttack: 50,
      evDefense: 75,
      evHp: 35,
      evSpAttack: 70,
      evSpDefense: 30,
      evSpeed: 40,
    };
    const expectedResult = 300;
    expect(getTotalEvs(evs)).toBe(expectedResult);
  });
});
