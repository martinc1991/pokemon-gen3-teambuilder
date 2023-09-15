import type { IPokemon } from 'contract';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

interface TeamSlot {
  slotId: string;
  name: string;
  pokemon: IPokemon;
}

interface TeamState {
  slots: TeamSlot[];
  pokemon: number;
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slotId: string) => void;
}

export const useTeamStore = create<TeamState>()((set) => ({
  slots: [],
  pokemon: 0,
  addSlot: (pokemon) => {
    const newSlot: TeamSlot = { name: '', pokemon, slotId: nanoid(6) };
    set((state) => {
      if (state.slots.length >= 6) return state;
      return { slots: state.slots.concat(newSlot) };
    });
  },
  removeSlot: (slotId: string) => {
    set((state) => {
      const newSlots: TeamSlot[] = state.slots.filter((slot) => slot.slotId !== slotId);
      return { slots: newSlots };
    });
  },
}));
