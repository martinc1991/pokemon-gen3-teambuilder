import { LocalSlot, PokemonWithAbilitiesAndLearnset } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface TeamState {
  slot: LocalSlot | null;
  pokemon: PokemonWithAbilitiesAndLearnset | null;
}
interface TeamActions {
  addPokemon: (slot: PokemonWithAbilitiesAndLearnset) => void;
  addSlot: (slot: LocalSlot) => void;
}

export type SlotConfigModalStore = TeamState & TeamActions;

const store = immer<SlotConfigModalStore>((set) => ({
  slot: null,
  pokemon: null,
  addPokemon: (pokemon) => {
    set((state) => {
      state.pokemon = pokemon;
    });
  },
  addSlot: (slot) => {
    set((state) => {
      state.slot = slot;
    });
  },
}));

export const useSlotConfigModalStore = create(store);
