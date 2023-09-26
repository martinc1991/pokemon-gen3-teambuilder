import type { IPokemon, ISlot } from 'contract';
import { Gender, NatureNames } from 'contract';
import { nanoid } from 'nanoid';

export interface TeamSlot extends Omit<ISlot, 'team' | 'ability' | 'nature' | 'item'> {
  pokemon: IPokemon;
  order: number;
}

// This is used as a base for a empty TeamSlot
export class EmptySlot implements Omit<TeamSlot, 'pokemon'> {
  id: string;
  teamId: string;
  name: '';
  pokemon: null;
  nationalPokedexNumber: 0;
  order: -1;

  abilityName: '';
  natureName: NatureNames;
  itemName: '';

  shiny: false;

  evHp: 0;
  evAttack: 0;
  evDefense: 0;
  evSpAttack: 0;
  evSpDefense: 0;
  evSpeed: 0;

  gender: Gender;
  level: 100;
  happiness: 255;

  constructor() {
    this.id = genLocalSlotId();
    this.teamId = '';
    this.nationalPokedexNumber = 0;
    this.name = '';
    this.abilityName = '';
    this.pokemon = null;

    this.natureName = NatureNames.docile;
    this.itemName = '';
    this.shiny = false;

    this.evHp = 0;
    this.evAttack = 0;
    this.evDefense = 0;
    this.evSpAttack = 0;
    this.evSpDefense = 0;
    this.evSpeed = 0;

    this.order = -1;
    this.gender = Gender.genderless; // Just a default value, it isn't used
    this.level = 100;
    this.happiness = 255;
  }
}

export function genLocalSlotId(): string {
  return `local-slot-${nanoid(6)}`;
}

export function genLocalTeamId(): string {
  return `local-team-${nanoid(6)}`;
}
