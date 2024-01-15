import { describe, expect, test } from 'vitest';
import { getKeys, getValues } from './index';

describe('getKeys', () => {
  test('should work on a basic object', () => {
    const obj = { a: 1, b: 2 };

    const result = getKeys(obj);
    expect(result).toEqual(['a', 'b']);
  });
  test('should work on nested object', () => {
    const obj = { a: 1, b: { c: 2 } };

    const result = getKeys(obj);
    expect(result).toEqual(['a', 'b']);
  });
  test('should work on empty object', () => {
    const obj = {};

    const result = getKeys(obj);
    expect(result).toEqual([]);
  });
});

describe('getValues', () => {
  test('should work on a basic object', () => {
    const obj = { a: 1, b: 2 };

    const result = getValues(obj);
    expect(result).toEqual([1, 2]);
  });
  test('should work on nested object', () => {
    const obj = { a: 1, b: { c: 2 } };

    const result = getValues(obj);
    expect(result).toEqual([1, { c: 2 }]);
  });
  test('should work on empty object', () => {
    const obj = {};

    const result = getValues(obj);
    expect(result).toEqual([]);
  });
});
