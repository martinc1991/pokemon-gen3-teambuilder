import type { IPokemon } from 'contract';
import { create } from 'zustand';
import type { TeamSlot } from './helpers';
import { EmptySlot, addokemonToSlot, emptyTeam, getFirstEmptySlotIndex } from './helpers';

interface TeamState {
  slots: TeamSlot[];
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: TeamSlot) => void;
}

export const useTeamStore = create<TeamState>()((set) => ({
  slots: emptyTeam,
  addSlot: (pokemon) => {
    set((state) => {
      const index = getFirstEmptySlotIndex(state.slots);
      if (index === null) return state;
      const newSlot: TeamSlot = { ...state.slots[index], name: '', pokemon, nationalPokedexNumber: pokemon.nationalPokedexNumber };

      const newSlots = addokemonToSlot(state.slots, index, newSlot);
      return { slots: newSlots };
    });
  },
  removeSlot: (slot: TeamSlot) => {
    set((state) => {
      if (!slot.pokemon) return state;
      const newSlots: TeamSlot[] = state.slots.filter((s) => s.slotId !== slot.slotId);
      newSlots.push(new EmptySlot(5));
      return { slots: newSlots };
    });
  },
}));
