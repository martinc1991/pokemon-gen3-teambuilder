import { Gender, NatureNames } from '@prisma/client';
import { JSONSlot } from 'contract';
import { CreateTeamDto, EditTeamDto } from '../../dto';

export const teamIdStub = 'fake-team-id';
export const teamNameStub = 'fake-team-id';
export const teamDescriptionStub = 'fake-team-description';
export const teamUserNameStub = 'fake-team-username';

export function createTeamDtoStub(num = 1, skipSlots = false): CreateTeamDto {
  const dto: CreateTeamDto = {
    name: teamNameStub,
    slots: slotArr.slice(0, num),
    description: teamDescriptionStub,
    userName: teamUserNameStub,
    isPublic: false,
    isSample: false,
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

const genericSlot: Omit<JSONSlot, 'nationalPokedexNumber'> = {
  species: 'generic-species',
  nickname: 'generic-name',
  abilityName: 'generic-abilityName',
  natureName: NatureNames.careful,
  evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
  ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
  itemName: 'generic-itemName',
  shiny: false,
  gender: Gender.male,
  moves: ['tackle'],
  level: 100,
  happiness: 100,
};

const slotArr: JSONSlot[] = [
  { ...genericSlot, nationalPokedexNumber: 1 },
  { ...genericSlot, nationalPokedexNumber: 2 },
  { ...genericSlot, nationalPokedexNumber: 3 },
  { ...genericSlot, nationalPokedexNumber: 4 },
  { ...genericSlot, nationalPokedexNumber: 5 },
  { ...genericSlot, nationalPokedexNumber: 6 },
];
