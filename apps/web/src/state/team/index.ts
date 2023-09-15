import type { IPokemon } from 'contract';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import type { TeamSlot } from './helpers';
import { EmptySlot, emptyTeam, getFirstEmptySlotIndex, replaceSlot } from './helpers';

interface TeamState {
  slots: TeamSlot[];
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: TeamSlot) => void;
}

export const useTeamStore = create<TeamState>()((set) => ({
  slots: emptyTeam,
  addSlot: (pokemon) => {
    const newSlot: TeamSlot = { name: '', pokemon, slotId: nanoid(6) };
    set((state) => {
      const index = getFirstEmptySlotIndex(state.slots);
      if (index === null) return state;

      const newSlots = replaceSlot(state.slots, index, newSlot);
      return { slots: newSlots };
    });
  },
  removeSlot: (slot: TeamSlot) => {
    set((state) => {
      if (!slot.pokemon) return state;
      const newSlots: TeamSlot[] = state.slots.filter((s) => s.slotId !== slot.slotId);
      newSlots.push(new EmptySlot());
      return { slots: newSlots };
    });
  },
}));
