// sum.test.js
import { describe, expect, test } from 'vitest';
import { formatPokemonName, isValidNationalPokedexNumber } from './index';

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

describe('formatPokemonName', () => {
  test('should work with empty strings', () => {
    expect(formatPokemonName('')).toBe('');
  });
  test('should work with valid strings', () => {
    expect(formatPokemonName('deoxys-speed')).toBe('Deoxys-Speed');
    expect(formatPokemonName('pikachu')).toBe('Pikachu');
    expect(formatPokemonName('ho-oh')).toBe('Ho-Oh');
    expect(formatPokemonName('charizard-mega-x')).toBe('Charizard-Mega-X');
    expect(formatPokemonName('mewtwo-mega-y')).toBe('Mewtwo-Mega-Y');
    expect(formatPokemonName('mewtwo-mega-x-y')).toBe('Mewtwo-Mega-X-Y');
    expect(formatPokemonName('mewtwo-mega-x-y-z')).toBe('Mewtwo-Mega-X-Y-Z');
    expect(formatPokemonName('mewtwo-mega-x-y-z-a')).toBe('Mewtwo-Mega-X-Y-Z-A');
  });
  test('should work with strings containing spaces instead of hyphens', () => {
    expect(formatPokemonName('deoxys speed')).toBe('Deoxys-Speed');
    expect(formatPokemonName('pikachu')).toBe('Pikachu');
    expect(formatPokemonName('ho oh')).toBe('Ho-Oh');
    expect(formatPokemonName('charizard mega x')).toBe('Charizard-Mega-X');
    expect(formatPokemonName('mewtwo mega y')).toBe('Mewtwo-Mega-Y');
    expect(formatPokemonName('mewtwo mega x y')).toBe('Mewtwo-Mega-X-Y');
    expect(formatPokemonName('mewtwo mega x y z')).toBe('Mewtwo-Mega-X-Y-Z');
    expect(formatPokemonName('mewtwo mega x y z a')).toBe('Mewtwo-Mega-X-Y-Z-A');
  });
  test('should work with strings containing spaces and hyphens', () => {
    expect(formatPokemonName('mewtwo mega x-y')).toBe('Mewtwo-Mega-X-Y');
    expect(formatPokemonName('mewtwo-mega x y z')).toBe('Mewtwo-Mega-X-Y-Z');
    expect(formatPokemonName('mewtwo mega x-y z a')).toBe('Mewtwo-Mega-X-Y-Z-A');
  });
});
