import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { TeamState } from '@state/team';

export type TrashBinTeam = Omit<TeamState, 'selectedSlotIndex'>;

interface TrashBinState {
  team: TrashBinTeam | null;
}

interface TrashBinActions {
  add: (team: TrashBinTeam) => void;
  clear: () => void;
}

export const useTrashBinStore = create(
  immer<TrashBinState & TrashBinActions>((set) => ({
    team: null,
    add: (team) => {
      set((state) => {
        state.team = team;
      });
    },
    clear: () => {
      set((state) => {
        state.team = null;
      });
    },
  })),
);
