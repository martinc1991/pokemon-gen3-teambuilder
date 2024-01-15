import { DEFAULT_EVS, DEFAULT_IVS, MAX_HAPPINESS, MAX_LEVEL } from 'contract';
import { describe, expect, test, beforeEach } from 'vitest';
import { CreateSlotParams, createSlot } from '..';

const optionalParams = [
  ['nickname', ''],
  ['itemName', null],
  ['evs', DEFAULT_EVS],
  ['ivs', DEFAULT_IVS],
  ['level', MAX_LEVEL],
  ['happiness', MAX_HAPPINESS],
  ['moves', []],
  ['natureName', 'serious'],
  ['shiny', false],
];

const createSlotParams: CreateSlotParams = {
  abilityName: 'static',
  gender: 'male',
  nationalPokedexNumber: 25,
  species: 'pikachu',
};

describe('createSlot', () => {
  let params: CreateSlotParams;

  beforeEach(() => {
    params = { ...createSlotParams };
  });

  test.each(optionalParams)('should add default %s if not provided', (...args) => {
    const result = createSlot(params);

    expect(result[args[0] as keyof CreateSlotParams]).toStrictEqual(args[1]);
  });
});
