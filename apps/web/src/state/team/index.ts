import { type IPokemon, type ISlotOrder } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { TeamSlot } from './helpers';
import { EmptySlot, addokemonToSlot, emptyTeam, getFirstEmptySlotIndex } from './helpers';

interface TeamState {
  slots: TeamSlot[];
  selectedSlotIndex: ISlotOrder | null;
}

interface TeamActions {
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: TeamSlot) => void;
  setSelectedSlotIndex: (index: ISlotOrder) => void;
  setSlotFieldValue: <T extends keyof TeamSlot>(slot: TeamSlot, fieldName: T, fieldValue: TeamSlot[T]) => void;
}

export const useTeamStore = create(
  immer<TeamState & TeamActions>((set) => ({
    slots: emptyTeam,
    selectedSlotIndex: 0,
    addSlot: (pokemon) => {
      set((state) => {
        const index = getFirstEmptySlotIndex(state.slots);
        if (index === null) return state;
        const newSlot: TeamSlot = {
          ...state.slots[index],
          name: '',
          pokemon,
          nationalPokedexNumber: pokemon.nationalPokedexNumber,
          gender: pokemon.genders[0],
        };

        const newSlots = addokemonToSlot(state.slots, index, newSlot);

        state.slots = newSlots;
      });
    },
    removeSlot: (slot: TeamSlot) => {
      set((state) => {
        if (!slot.pokemon) return state;
        const newSlots: TeamSlot[] = state.slots.filter((s) => s.slotId !== slot.slotId);

        newSlots.push(new EmptySlot(5));

        for (let i = 0; i < newSlots.length; i++) {
          newSlots[i].order = i as ISlotOrder;
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
