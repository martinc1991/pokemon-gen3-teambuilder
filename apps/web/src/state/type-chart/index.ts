import { Type } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface TypeChartState {
  attackingType: Type | null;
  defendingTypes: Type[];
}

interface TypeChartActions {
  setAttackingType: (type: Type) => void;
  clearAttackingType: () => void;
  addDefendingType: (type: Type) => void;
  removeDefendingType: (type: Type) => void;
  clearDefendingTypes: () => void;
}

export type TypeChartStore = TypeChartState & TypeChartActions;

const store = immer<TypeChartStore>((set) => ({
  attackingType: null,
  defendingTypes: [],
  setAttackingType: (type) => {
    set((state) => {
      state.attackingType = type;
    });
  },
  clearAttackingType: () => {
    set((state) => {
      state.attackingType = null;
    });
  },
  addDefendingType: (type) => {
    set((state) => {
      const newSelectedTypes = state.defendingTypes.concat(type);

      state.defendingTypes = newSelectedTypes;
    });
  },
  removeDefendingType: (type) => {
    set((state) => {
      const newSelectedTypes = state.defendingTypes.filter((t) => t.id !== type.id);

      state.defendingTypes = newSelectedTypes;
    });
  },
  clearDefendingTypes: () => {
    set((state) => {
      state.defendingTypes = [];
    });
  },
}));

export const useTypeChartStore = create(store);
