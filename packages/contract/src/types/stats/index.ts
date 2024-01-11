import z from 'zod';

export type StatIDExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
export type StatID = 'hp' | StatIDExceptHP;

export type StatsExceptHPTable = { [stat in StatIDExceptHP]: number };
export type StatsTable = { [stat in StatID]: number };

export const StatsSchema = z.object({
  hp: z.number().int(),
  atk: z.number().int(),
  def: z.number().int(),
  spa: z.number().int(),
  spd: z.number().int(),
  spe: z.number().int(),
});

// DELETE:
export type EvFieldName = 'evAttack' | 'evDefense' | 'evHp' | 'evSpAttack' | 'evSpDefense' | 'evSpeed';
export type IvFieldName = 'ivAttack' | 'ivDefense' | 'ivHp' | 'ivSpAttack' | 'ivSpDefense' | 'ivSpeed';
export type IBaseStats = {
  baseHp: number;
  baseAttack: number;
  baseDefense: number;
  baseSpattack: number;
  baseSpdefense: number;
  baseSpeed: number;
};
