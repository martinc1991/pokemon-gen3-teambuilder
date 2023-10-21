import { MAX_TEAM_MEMBERS, type IPokemon } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { FilledSlot, TeamState, TrashBinTeam } from './helpers';
import { BaseSlot, genLocalTeamId } from './helpers';

interface TeamActions {
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: FilledSlot) => void;
  clearTeam: () => void;
  setSelectedSlotIndex: (index: number) => void;
  setSlotFieldValue: <T extends keyof FilledSlot>(slot: FilledSlot, fieldName: T, fieldValue: FilledSlot[T]) => void;
  recoverFromTrash: (team: TrashBinTeam) => void;
}

export const useTeamStore = create(
  immer<TeamState & TeamActions>((set) => ({
    teamId: genLocalTeamId(),
    name: '',
    slots: [],
    selectedSlotIndex: 0,
    addSlot: (pokemon) => {
      set((state) => {
        if (state.slots.length >= MAX_TEAM_MEMBERS) return;

        const newSlot: FilledSlot = {
          ...new BaseSlot(state.slots.length, pokemon),
          teamId: state.teamId,
          pokemon,
        };

        const newSlots = state.slots.concat(newSlot);

        state.slots = newSlots;
      });
    },
    removeSlot: (slot: FilledSlot) => {
      set((state) => {
        const newSlots: FilledSlot[] = state.slots.filter((s) => s.id !== slot.id);

        for (let i = 0; i < newSlots.length; i++) {
          newSlots[i].order = i;
        }

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
    setSelectedSlotIndex: (index) => {
      set((state) => {
        state.selectedSlotIndex = index;
      });
    },
    setSlotFieldValue: (slot, field, value) => {
      set((state) => {
        state.slots[slot.order][field] = value;
      });
    },
    recoverFromTrash: (team) => {
      set((state) => {
        state.name = team.name;
        state.slots = team.slots;
        state.teamId = team.teamId;
      });
    },
  }))
);
