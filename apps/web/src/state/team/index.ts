import { TEAM_STORAGE_NAME } from '@state/team/constants';
import { JSONTeam, LocalSlot, LocalTeam, MAX_TEAM_MEMBERS } from 'contract';
import { CreateSlotParams } from 'utils';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createCurrentTeamSlot, genLocalTeamId } from './helpers';

export interface TeamState extends LocalTeam {
  selectedSlotIndex: number;
}

interface TeamActions {
  addSlot: (slot: CreateSlotParams) => void;
  removeSlot: (slotId: string) => void;
  clearTeam: () => void;
  setSelectedSlotIndex: (index: number) => void;
  setSlotFieldValue: <T extends keyof LocalSlot>(slotId: string, fieldName: T, fieldValue: LocalSlot[T]) => void;
  recoverFromTrash: (team: JSONTeam) => void;
}

export type TeamStore = TeamState & TeamActions;

const store = immer<TeamStore>((set) => ({
  id: genLocalTeamId(),
  name: '',
  description: '',
  slots: [],
  selectedSlotIndex: 0,
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

      state.selectedSlotIndex = 0;
      state.slots = newSlots;
    });
  },
  clearTeam: () => {
    set((state) => {
      state.slots = [];
      state.name = '';
      state.selectedSlotIndex = 0;
    });
  },
  setSelectedSlotIndex: (slot) => {
    set((state) => {
      state.selectedSlotIndex = slot;
    });
  },
  setSlotFieldValue: (slotId, field, value) => {
    set((state) => {
      const index = state.slots.findIndex((s) => s.meta.id === slotId);

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
      state.selectedSlotIndex = 0;
    });
  },
}));

export const useTeamStore = create(
  persist(store, {
    name: TEAM_STORAGE_NAME,
    storage: createJSONStorage(() => sessionStorage),
  }),
);
