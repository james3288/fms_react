// import { create } from "zustand";
// import { produce } from "immer";

// const initialState = {
//   itemCode: "",
// };

// export const useRepairOrderStore = create((set) => ({
//   ...initialState,
//   setItemCode: async (data) =>
//     set(
//       produce((state) => {
//         state.itemCode = data;
//       })
//     ),
// }));

import { create } from "zustand";
import { produce } from "immer";
import {
  RepairOrderActions,
  RepairOrderState,
} from "../interfaces/repairOrderInterface";

// Combine state and actions into a single store type
type RepairOrderStore = RepairOrderState & RepairOrderActions;

const initialState: RepairOrderState = {
  itemCode: "",
  items: "",
};

export const useRepairOrderStore = create<RepairOrderStore>((set) => ({
  ...initialState,
  setItemCode: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.itemCode = data;
      })
    );
  },
  setItems: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.items = data;
      })
    );
  },
}));
