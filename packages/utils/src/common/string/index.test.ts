import { describe, expect, test } from 'vitest';
import { capitalize, capitalizeEach, formatString, getTierText, replaceHyphensWithSpaces } from './index';

describe('capitalize', () => {
  test('should capitalize the first letter of any given string', () => {
    expect(capitalize('any random string')).toBe('Any random string');
    expect(capitalize('ANY RANDOM STRING')).toBe('ANY RANDOM STRING');
  });
  test('should return an empty string if an empty string is provided', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('capitalizeEach', () => {
  test('should capitalize each first letter of any given string', () => {
    expect(capitalizeEach('any random string')).toBe('Any Random String');
    expect(capitalizeEach('ANY RANDOM STRING')).toBe('ANY RANDOM STRING');
  });
  test('should return an empty string if an empty string is provided', () => {
    expect(capitalizeEach('')).toBe('');
  });
});

describe('replaceHyphensWithSpaces', () => {
  test('should replace any given number of hyphens with spaces', () => {
    expect(replaceHyphensWithSpaces('any-random-string')).toBe('any random string');
    expect(replaceHyphensWithSpaces('ANY-RANDOM-STRING')).toBe('ANY RANDOM STRING');
    expect(replaceHyphensWithSpaces('-----')).toBe('     ');
  });
  test('should handle a string with no hyphens', () => {
    expect(formatString('anyRandomString')).toBe('AnyRandomString');
  });
  test('should return an empty string if an empty string is provided', () => {
    expect(replaceHyphensWithSpaces('')).toBe('');
  });
});

describe('formatString', () => {
  test('should replace any given number of hyphens with spaces', () => {
    expect(formatString('any-random-string')).toBe('Any Random String');
    expect(formatString('ANY-RANDOM-STRING')).toBe('ANY RANDOM STRING');
    expect(formatString('-----')).toBe('     ');
  });
  test('should handle a string with no hyphens', () => {
    expect(formatString('anyRandomString')).toBe('AnyRandomString');
  });
  test('should return an empty string if an empty string is provided', () => {
    expect(formatString('')).toBe('');
  });
});

describe('getTierText', () => {
  test('should return the correct formatted name of each tier', () => {
    expect(getTierText('lc')).toBe('LC');
    expect(getTierText('nfe')).toBe('NFE');
    expect(getTierText('nu')).toBe('NU');
    expect(getTierText('ou')).toBe('OU');
    expect(getTierText('pu')).toBe('PU');
    expect(getTierText('publ')).toBe('PUBL');
    expect(getTierText('uber')).toBe('Uber');
    expect(getTierText('uu')).toBe('UU');
    expect(getTierText('uubl')).toBe('UUBL');
  });
});
