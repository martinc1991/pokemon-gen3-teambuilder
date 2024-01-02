// sum.test.js
import { expect, test, describe } from 'vitest';
import { isValidNationalPokedexNumber } from './index';

describe('isValidNationalPokedexNumber', () => {
  test('should return true if it receives an integer between 1 and 389', () => {
    expect(isValidNationalPokedexNumber(1)).toBe(true);
    expect(isValidNationalPokedexNumber(45)).toBe(true);
    expect(isValidNationalPokedexNumber(389)).toBe(true);
  });
  test('should return false if it receives an integer outside from 1 and 389', () => {
    expect(isValidNationalPokedexNumber(0)).toBe(false);
    expect(isValidNationalPokedexNumber(390)).toBe(false);
    expect(isValidNationalPokedexNumber(450)).toBe(false);
    expect(isValidNationalPokedexNumber(-450)).toBe(false);
  });
  test('should return false for invalid input types', () => {
    expect(isValidNationalPokedexNumber(3.14)).toBe(false);
    expect(isValidNationalPokedexNumber('17')).toBe(false);
    expect(isValidNationalPokedexNumber('400')).toBe(false);
    expect(isValidNationalPokedexNumber('string')).toBe(false);
    expect(isValidNationalPokedexNumber(null)).toBe(false);
    expect(isValidNationalPokedexNumber(undefined)).toBe(false);
    expect(isValidNationalPokedexNumber({})).toBe(false);
    expect(isValidNationalPokedexNumber(true)).toBe(false);
    expect(isValidNationalPokedexNumber(false)).toBe(false);
    expect(isValidNationalPokedexNumber([])).toBe(false);
    expect(isValidNationalPokedexNumber({ key: 'value' })).toBe(false);
  });
});
