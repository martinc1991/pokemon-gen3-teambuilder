import { describe, expect, test } from 'vitest';
import { calculateHiddenPowerType } from './index';

describe('calculateHiddenPowerType', () => {
  test('should return the correct total base stat value', () => {
    const ivs1 = { ivAttack: 29, ivDefense: 23, ivHp: 12, ivSpAttack: 14, ivSpDefense: 8, ivSpeed: 31 };
    const ivs2 = { ivAttack: 15, ivDefense: 11, ivHp: 12, ivSpAttack: 15, ivSpDefense: 0, ivSpeed: 5 };

    const expectedResult1 = 'ground';
    const expectedResult2 = 'steel';

    expect(calculateHiddenPowerType(ivs1)).toBe(expectedResult1);
    expect(calculateHiddenPowerType(ivs2)).toBe(expectedResult2);
  });
  test('should return the fighting if every IV is 0', () => {
    const ivs = { ivAttack: 0, ivDefense: 0, ivHp: 0, ivSpAttack: 0, ivSpDefense: 0, ivSpeed: 0 };
    const expectedResult = 'fighting';
    expect(calculateHiddenPowerType(ivs)).toBe(expectedResult);
  });
  test('should return the dark if every IV is 31', () => {
    const ivs = { ivAttack: 31, ivDefense: 31, ivHp: 31, ivSpAttack: 31, ivSpDefense: 31, ivSpeed: 31 };
    const expectedResult = 'dark';
    expect(calculateHiddenPowerType(ivs)).toBe(expectedResult);
  });
});
