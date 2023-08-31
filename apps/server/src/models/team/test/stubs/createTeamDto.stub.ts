import { NatureNames } from '@prisma/client';
import { CreateTeamDto, EditTeamDto, TeamSlotDto } from '../../dto';

export const teamIdStub = 'fake-team-id';
export const teamNameStub = 'fake-team-id';

export function createTeamDtoStub(num = 1, skipSlots = false): CreateTeamDto {
  const dto = {
    name: teamNameStub,
    slots: slotArr.slice(0, num),
  };

  if (skipSlots) {
    delete dto.slots;
  }

  return dto;
}

export function editTeamDtoStub(num = 1, skipSlots = false): EditTeamDto {
  const dto = {
    ...createTeamDtoStub(num),
    id: teamIdStub,
  };

  if (skipSlots) {
    delete dto.slots;
  }

  return dto;
}

const genericSlot: TeamSlotDto = {
  nationalPokedexNumber: 1,
  name: 'generic-name',
  abilityName: 'generic-abilityName',
  natureName: NatureNames.careful,
  evHp: 0,
  evAttack: 0,
  evDefense: 0,
  evSpAttack: 0,
  evSpDefense: 0,
  evSpeed: 0,
  itemName: 'generic-itemName',
  shiny: false,
};

const slotArr: TeamSlotDto[] = [
  {
    ...genericSlot,
    name: 'bulbasaur',
    nationalPokedexNumber: 1,
  },
  {
    ...genericSlot,
    name: 'ivysaur',
    nationalPokedexNumber: 2,
  },
  {
    ...genericSlot,
    name: 'venusaur',
    nationalPokedexNumber: 3,
  },
  {
    ...genericSlot,
    name: 'charmander',
    nationalPokedexNumber: 4,
  },
  {
    ...genericSlot,
    name: 'charmeleon',
    nationalPokedexNumber: 5,
  },
  {
    ...genericSlot,
    name: 'charizard',
    nationalPokedexNumber: 6,
  },
];
