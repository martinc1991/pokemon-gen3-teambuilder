import { describe, expect, test } from 'vitest';
import { calculateHiddenPowerType } from './index';

describe('calculateHiddenPowerType', () => {
  test('should return the correct total base stat value', () => {
    const ivs1 = { atk: 29, def: 23, hp: 12, spa: 14, spd: 8, spe: 31 };
    const ivs2 = { atk: 15, def: 11, hp: 12, spa: 15, spd: 0, spe: 5 };

    const expectedResult1 = 'ground';
    const expectedResult2 = 'steel';

    expect(calculateHiddenPowerType(ivs1)).toBe(expectedResult1);
    expect(calculateHiddenPowerType(ivs2)).toBe(expectedResult2);
  });
  test('should return the fighting if every IV is 0', () => {
    const ivs = { atk: 0, def: 0, hp: 0, spa: 0, spd: 0, spe: 0 };
    const expectedResult = 'fighting';
    expect(calculateHiddenPowerType(ivs)).toBe(expectedResult);
  });
  test('should return the dark if every IV is 31', () => {
    const ivs = { atk: 31, def: 31, hp: 31, spa: 31, spd: 31, spe: 31 };
    const expectedResult = 'dark';
    expect(calculateHiddenPowerType(ivs)).toBe(expectedResult);
  });
});
