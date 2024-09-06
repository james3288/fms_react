import { create } from "zustand";
import { produce } from "immer";
import {
  facilityHistoryAction,
  facilityHistoryState,
} from "../interfaces/facilityHistoryInterface";
import { facilityHistory } from "../typeProps/typeProps";

type facilityHistoryStore = facilityHistoryState & facilityHistoryAction;

const initialState: facilityHistoryState = {
  itemCode: "",
  search: "",
  facilityHistory: [],
};

export const useFacilityHistoryStore = create<facilityHistoryStore>((set) => ({
  ...initialState,
  setSearch: (param: string) => {
    set((state) =>
      produce(state, (draft) => {
        draft.search = param;
      })
    );
  },
  setFacilityHistory: (data: facilityHistory[]) => {
    set((state) =>
      produce(state, (draft) => {
        draft.facilityHistory = data;
      })
    );
  },
}));
