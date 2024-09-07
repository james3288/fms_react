import { create } from "zustand";
import { produce } from "immer";

import { headerAction, headerState } from "../interfaces/headerInterface";

type headerStore = headerState & headerAction;

const initialState: headerState = {
  toggleSearchBar: false,
  toggleSideBar: false,
};

export const useHeaderStore = create<headerStore>((set) => ({
  ...initialState,
  setToggleSearchBar: (data: boolean) => {
    set((state) =>
      produce(state, (draft) => {
        draft.toggleSearchBar = data;
      })
    );
  },
  setToggleSideBar: (data: boolean) => {
    set((state) =>
      produce(state, (draft) => {
        draft.toggleSideBar = data;
      })
    );
  },
}));
