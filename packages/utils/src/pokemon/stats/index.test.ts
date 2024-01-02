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
  test('should return the correct stat value', () => {
    const input: CalculateStatProps = {
      statName: 'attack',
      base: 50,
      ev: 100,
      iv: 15,
      level: 50,
      nature: { decreased: 'defense', increased: 'attack' },
    };
    const expectedResult = 82;
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
