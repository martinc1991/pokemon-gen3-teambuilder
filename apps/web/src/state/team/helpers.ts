import type { IPokemon } from 'contract';
import { nanoid } from 'nanoid';

export interface TeamSlot {
  slotId: string;
  name: string;
  pokemon: IPokemon | null;
}

export class EmptySlot {
  slotId: string;
  name: '';
  pokemon: null;
  constructor() {
    this.slotId = nanoid(6);
    this.name = '';
    this.pokemon = null;
  }
}

export const emptyTeam = [new EmptySlot(), new EmptySlot(), new EmptySlot(), new EmptySlot(), new EmptySlot(), new EmptySlot()];

export function getFirstEmptySlotIndex(team: TeamSlot[]): number | null {
  const index = team.findIndex((s) => s.pokemon === null);
  return index >= 0 ? index : null;
}

export function replaceSlot(team: TeamSlot[], index: number, slot: TeamSlot): TeamSlot[] {
  const newArr = [...team];
  newArr.splice(index, 1, slot);
  return newArr;
}
