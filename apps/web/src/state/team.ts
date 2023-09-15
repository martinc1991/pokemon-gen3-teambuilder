import type { IPokemon } from 'contract';
import { create } from 'zustand';

interface TeamSlot {
  name: string;
  pokemon: IPokemon;
}

interface TeamState {
  slots: TeamSlot[];
  pokemon: number;
  addPokemon: (pokemon: IPokemon) => void;
}

export const useTeamStore = create<TeamState>()((set) => ({
  slots: [],
  pokemon: 0,
  addPokemon: (pokemon) => {
    const newSlot: TeamSlot = { name: '', pokemon };
    set((state) => {
      if (state.slots.length >= 6) return state;
      return { slots: state.slots.concat(newSlot) };
    });
  },
}));
