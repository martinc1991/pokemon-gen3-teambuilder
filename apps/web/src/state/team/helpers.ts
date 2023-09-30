import type { IPokemon, ISlot } from 'contract';
import { Gender, MAX_HAPPINESS, MAX_INDIVIDUAL_IV, MAX_LEVEL, NatureNames } from 'contract';
import { nanoid } from 'nanoid';

export interface FilledSlot extends Omit<ISlot, 'team' | 'ability' | 'nature' | 'item'> {
  pokemon: IPokemon;
  order: number;
}

// This is used as a base for a empty TeamSlot
export class BaseSlot implements Omit<FilledSlot, 'pokemon'> {
  id: string;
  teamId: string;
  name: string;
  pokemon: null;
  nationalPokedexNumber: number;
  order: number;

  abilityName: string;
  natureName: NatureNames;
  itemName: string;

  shiny: false;

  evHp: 0;
  evAttack: 0;
  evDefense: 0;
  evSpAttack: 0;
  evSpDefense: 0;
  evSpeed: 0;

  ivAttack: 31;
  ivDefense: 31;
  ivHp: 31;
  ivSpAttack: 31;
  ivSpDefense: 31;
  ivSpeed: 31;

  gender: Gender;
  level: number;
  happiness: number;

  constructor(order?: number, pokemon?: IPokemon) {
    const isSlotFilled = pokemon && order !== undefined;

    this.id = genLocalSlotId();
    this.teamId = '';
    this.nationalPokedexNumber = isSlotFilled ? pokemon.nationalPokedexNumber : 0;
    this.name = '';
    this.abilityName = isSlotFilled ? pokemon.abilities[0].name : '';
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

    this.ivAttack = MAX_INDIVIDUAL_IV;
    this.ivDefense = MAX_INDIVIDUAL_IV;
    this.ivHp = MAX_INDIVIDUAL_IV;
    this.ivSpAttack = MAX_INDIVIDUAL_IV;
    this.ivSpDefense = MAX_INDIVIDUAL_IV;
    this.ivSpeed = MAX_INDIVIDUAL_IV;

    this.order = isSlotFilled ? order : -1;

    this.gender = isSlotFilled ? pokemon.genders[0] : Gender.genderless; // Just a default value, it isn't used
    this.level = MAX_LEVEL;
    this.happiness = MAX_HAPPINESS;
  }
}

export function genLocalSlotId(): string {
  return `local-slot-${nanoid(6)}`;
}

export function genLocalTeamId(): string {
  return `local-team-${nanoid(6)}`;
}
