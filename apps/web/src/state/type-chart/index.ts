import { Type } from 'contract';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface TypeChartState {
  attackingType: Type | null;
  // selectedTypes: Type[];
}

interface TypeChartActions {
  setAttackingType: (type: Type) => void;
  clearAttackingType: () => void;
  // addSelectedTypes: (type: Type) => void;
  // removeSelectedTypes: (type: Type) => void;
  // clearSelectedTypes: () => void;
}

export type TypeChartStore = TypeChartState & TypeChartActions;

const store = immer<TypeChartStore>((set) => ({
  attackingType: null,
  selectedTypes: [],
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
  // addSelectedTypes: (type) => {
  //   set((state) => {
  //     const newSelectedTypes = state.selectedTypes.concat(type);

  //     state.selectedTypes = newSelectedTypes;
  //   });
  // },
  // removeSelectedTypes: (type) => {
  //   set((state) => {
  //     const newSelectedTypes = state.selectedTypes.filter((t) => t.id !== type.id);

  //     state.selectedTypes = newSelectedTypes;
  //   });
  // },
  // clearSelectedTypes: () => {
  //   set((state) => {
  //     state.selectedTypes = [];
  //   });
  // },
}));

export const useTypeChartStore = create(store);
