import type { IPokemonGetAllResponseElement, ISlot, ISlotOrder } from 'contract';
import { Gender } from 'contract';
import { nanoid } from 'nanoid';

export interface TeamSlot extends Omit<ISlot, 'team' | 'ability' | 'nature' | 'item' | 'id'> {
  pokemon: IPokemonGetAllResponseElement | null;
  order: ISlotOrder;
  slotId: string;
}

export interface FilledSlot extends TeamSlot {
  pokemon: IPokemonGetAllResponseElement; // TODO: this should be a complete pokemon (see IPokemon from contract)
}

export class EmptySlot implements TeamSlot {
  slotId: string;
  teamId: string;
  name: '';
  pokemon: null;
  nationalPokedexNumber: 0;
  order: ISlotOrder;

  abilityName: '';
  natureName: null;
  itemName: '';

  shiny: false;

  evHp: 0;
  evAttack: 0;
  evDefense: 0;
  evSpAttack: 0;
  evSpDefense: 0;
  evSpeed: 0;

  gender: Gender;
  level: number;
  happiness: number;

  constructor(order: ISlotOrder) {
    this.slotId = genLocalSlotId();
    this.teamId = genLocalTeamId();
    this.nationalPokedexNumber = 0;
    this.name = '';
    this.abilityName = '';
    this.pokemon = null;

    this.natureName = null;
    this.itemName = '';
    this.shiny = false;

    this.evHp = 0;
    this.evAttack = 0;
    this.evDefense = 0;
    this.evSpAttack = 0;
    this.evSpDefense = 0;
    this.evSpeed = 0;

    this.order = order;
    this.gender = Gender.genderless; // Just a default value, it isn't used
    this.level = 100;
    this.happiness = 255;
  }
}

export const emptyTeam = [new EmptySlot(0), new EmptySlot(1), new EmptySlot(2), new EmptySlot(3), new EmptySlot(4), new EmptySlot(5)];

export function genLocalSlotId(): string {
  return `local-slot-${nanoid(6)}`;
}

export function genLocalTeamId(): string {
  return `local-team-${nanoid(6)}`;
}

export function getFirstEmptySlotIndex(team: TeamSlot[]): ISlotOrder | null {
  const index = team.findIndex((s) => s.pokemon === null);
  return index >= 0 ? (index as ISlotOrder) : null;
}

export function addokemonToSlot(team: TeamSlot[], order: ISlotOrder, slot: TeamSlot): TeamSlot[] {
  const newArr = [...team];
  newArr.splice(order, 1, { ...slot, order });
  return newArr;
}
