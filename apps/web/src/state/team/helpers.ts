import type { LocalSlot } from 'contract';
import { nanoid } from 'nanoid';
import { CreateSlotParams, createSlot } from 'utils';

export function genLocalSlotId(): string {
  return `local-slot-${nanoid(6)}`;
}

export function genLocalTeamId(): string {
  return `local-team-${nanoid(6)}`;
}

export function createCurrentTeamSlot(slot: CreateSlotParams): LocalSlot {
  return {
    ...createSlot(slot),
    meta: {
      id: genLocalSlotId(),
    },
  };
}
