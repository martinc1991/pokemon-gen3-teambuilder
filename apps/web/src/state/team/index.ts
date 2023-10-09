import { MAX_TEAM_MEMBERS, type IPokemon } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { FilledSlot } from './helpers';
import { BaseSlot, genLocalTeamId } from './helpers';

interface TeamState {
  teamId: string;
  name: string;
  slots: FilledSlot[];
  selectedSlotIndex: number;
}

interface TeamActions {
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: FilledSlot) => void;
  setSelectedSlotIndex: (index: number) => void;
  setSlotFieldValue: <T extends keyof FilledSlot>(slot: FilledSlot, fieldName: T, fieldValue: FilledSlot[T]) => void;
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
  }))
);
