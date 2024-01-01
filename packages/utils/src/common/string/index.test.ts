import { describe, expect, test } from 'vitest';
import { capitalize, capitalizeEach, replaceHyphensWithSpaces, formatString } from './index';

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
