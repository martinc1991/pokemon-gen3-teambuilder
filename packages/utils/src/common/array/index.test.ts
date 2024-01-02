import { describe, expect, test } from 'vitest';
import { combineAndRemoveDuplicates, combineArrays, findDuplicates, removeDuplicates } from './index';

describe('findDuplicateStrings', () => {
  test('should find duplicates in two arrays', () => {
    const array1 = ['apple', 'banana', 'watermelon', 'pear'];
    const array2 = ['watermelon', 'grape', 'apple', 'kiwi'];
    const expectedOutput = ['apple', 'watermelon'];

    const result = findDuplicates(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle empty arrays', () => {
    const array1: string[] = [];
    const array2: string[] = [];
    const expectedOutput: string[] = [];

    const result = findDuplicates(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle arrays with no duplicates', () => {
    const array1 = ['apple', 'banana', 'watermelon'];
    const array2 = ['grape', 'kiwi', 'melon'];
    const expectedOutput: string[] = [];

    const result = findDuplicates(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle arrays with duplicate elements but of different types', () => {
    const array1 = [1, 'apple', true, 42];
    const array2 = ['apple', 42, false, 1];
    const expectedOutput: any[] = ['apple', 42, 1];

    const result = findDuplicates(array1, array2);

    expect(result.sort()).toEqual(expectedOutput.sort());
  });
});

describe('combineArrays', () => {
  test('should combine 2 arrays', () => {
    // Arrange
    const array1 = [1, 2, 3];
    const array3 = ['true', 8];
    const expectedOutput = [1, 2, 3, 'true', 8];

    // Act
    const result = combineArrays(array1, array3);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
  test('should combine any given number of arrays', () => {
    // Arrange
    const array1 = [1, 2, 3];
    const array2 = ['apple', 'banana'];
    const array3 = ['true', 8];
    const expectedOutput = [1, 2, 3, 'apple', 'banana', 'true', 8];

    // Act
    const result = combineArrays(array1, array2, array3);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  test('should handle empty arrays', () => {
    // Arrange
    const expectedOutput: string[] = [];

    // Act
    const result = combineArrays();

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  test('should handle all empty arrays', () => {
    // Arrange
    const array1 = [];
    const array2 = [];
    const array3 = [];
    const expectedOutput = [];

    // Act
    const result = combineArrays(array1, array2, array3);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});

describe('removeDuplicates', () => {
  test('should work with empty arrays', () => {
    const array: string[] = [];
    const expectedOutput: string[] = [];

    const result = removeDuplicates(array);

    expect(result).toEqual(expectedOutput);
  });
  test('should work with an array with only one element', () => {
    const array = ['apple'];
    const expectedOutput = ['apple'];

    const result = removeDuplicates(array);

    expect(result).toEqual(expectedOutput);
  });
  test('should remove duplicates', () => {
    const array = ['apple', 'banana', 'apple', 'kiwi'];
    const expectedOutput = ['apple', 'banana', 'kiwi'];

    const result = removeDuplicates(array);

    expect(result).toEqual(expectedOutput);
  });
  test('should work with different types', () => {
    const array = [1, 'apple', true, 42, 'apple', 42];
    const expectedOutput = [1, 'apple', true, 42];

    const result = removeDuplicates(array);

    expect(result).toEqual(expectedOutput);
  });
});

describe('combineAndRemoveDuplicates', () => {
  test('should work with empty arrays', () => {
    const expectedOutput: string[] = [];

    const result = combineAndRemoveDuplicates();

    expect(result).toEqual(expectedOutput);
  });
  test('should work with one element arrays', () => {
    const array1 = ['apple'];
    const array2 = ['banana'];
    const expectedOutput = ['apple', 'banana'];

    const result = combineAndRemoveDuplicates(array1, array2);

    expect(result).toEqual(expectedOutput);
  });
  test('should work with multiple element arrays', () => {
    const array1 = ['apple', 'banana'];
    const array2 = ['apple', 'kiwi'];
    const expectedOutput = ['apple', 'banana', 'kiwi'];

    const result = combineAndRemoveDuplicates(array1, array2);

    expect(result).toEqual(expectedOutput);
  });
});
