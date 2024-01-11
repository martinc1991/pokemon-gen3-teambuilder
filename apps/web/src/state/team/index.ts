import { TEAM_STORAGE_NAME } from '@state/team/constants';
import { JSONTeam, LocalSlot, MAX_TEAM_MEMBERS } from 'contract';
import { CreateSlotParams } from 'utils';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { TeamState } from './helpers';
import { createCurrentTeamSlot, genLocalTeamId } from './helpers';

// TODO: mover esto a helpers
interface TeamActions {
  addSlot: (slot: CreateSlotParams) => void;
  removeSlot: (slotId: string) => void;
  clearTeam: () => void;
  setSelectedSlot: (slot: LocalSlot) => void; // TODO: make this select the index, not the slot
  setSlotFieldValue: <T extends keyof LocalSlot>(slot: LocalSlot, fieldName: T, fieldValue: LocalSlot[T]) => void;
  recoverFromTrash: (team: JSONTeam) => void;
}

export type TeamStore = TeamState & TeamActions;

const store = immer<TeamStore>((set) => ({
  id: genLocalTeamId(),
  name: '',
  description: '',
  slots: [],
  selectedSlot: null,
  userName: '',
  isSample: false,
  isPublic: false,
  addSlot: (pokemon) => {
    set((state) => {
      if (state.slots.length >= MAX_TEAM_MEMBERS) return;

      const newSlot: LocalSlot = createCurrentTeamSlot(pokemon);

      const newSlots = state.slots.concat(newSlot);

      state.slots = newSlots;
    });
  },
  removeSlot: (slotId: string) => {
    set((state) => {
      const newSlots: LocalSlot[] = state.slots.filter((s) => s.meta.id !== slotId);

      state.selectedSlot = null;
      state.slots = newSlots;
    });
  },
  clearTeam: () => {
    set((state) => {
      state.slots = [];
      state.name = '';
      state.selectedSlot = null;
    });
  },
  setSelectedSlot: (slot) => {
    set((state) => {
      state.selectedSlot = slot;
    });
  },
  setSlotFieldValue: (slot, field, value) => {
    set((state) => {
      const index = state.slots.findIndex((s) => s.meta.id === slot.meta.id);
      state.slots[index][field] = value;
    });
  },
  recoverFromTrash: (team) => {
    set((state) => {
      const newSlots = team.slots.map((s) => createCurrentTeamSlot(s));

      state.name = team.name;
      state.slots = newSlots;
      state.id = team.id;
      state.isSample = team.isSample;
      state.isPublic = team.isPublic;
      state.description = team.description;
      state.userName = team.userName;
      state.selectedSlot = null;
    });
  },
}));

export const useTeamStore = create(
  persist(store, {
    name: TEAM_STORAGE_NAME,
    storage: createJSONStorage(() => sessionStorage),
  }),
);
