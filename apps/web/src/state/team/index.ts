import { type IPokemon } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { TeamSlot } from './helpers';
import { EmptySlot, genLocalTeamId } from './helpers';

interface TeamState {
  teamId: string;
  name: string;
  slots: TeamSlot[];
  selectedSlotIndex: number | null;
}

interface TeamActions {
  addSlot: (pokemon: IPokemon) => void;
  removeSlot: (slot: TeamSlot) => void;
  setSelectedSlotIndex: (index: number) => void;
  setSlotFieldValue: <T extends keyof TeamSlot>(slot: TeamSlot, fieldName: T, fieldValue: TeamSlot[T]) => void;
}

export const useTeamStore = create(
  immer<TeamState & TeamActions>((set) => ({
    teamId: genLocalTeamId(),
    name: '',
    slots: [],
    selectedSlotIndex: 0,
    addSlot: (pokemon) => {
      set((state) => {
        if (state.slots.length >= 6) return state;
        const newSlot: TeamSlot = {
          ...new EmptySlot(),
          order: state.slots.length,
          teamId: state.teamId,
          name: '',
          pokemon,
          nationalPokedexNumber: pokemon.nationalPokedexNumber,
          gender: pokemon.genders[0],
          level: 100,
          happiness: 255,
          abilityName: pokemon.abilities[0].name,
        };

        const newSlots = state.slots.concat(newSlot);

        state.slots = newSlots;
      });
    },
    removeSlot: (slot: TeamSlot) => {
      set((state) => {
        const newSlots: TeamSlot[] = state.slots.filter((s) => s.id !== slot.id);

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
