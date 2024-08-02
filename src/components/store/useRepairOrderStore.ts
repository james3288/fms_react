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
  problemEncountered: "",
  repairDate: "",
  deliveredBy: "",
  receivedBy: "",
  contactNo: "",
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
  setProblemEncountered: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.problemEncountered = data;
      })
    );
  },
  setRepairDate: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.repairDate = data;
      })
    );
  },
  setDeliveredBy: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.deliveredBy = data;
      })
    );
  },
  setReceivedBy: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.receivedBy = data;
      })
    );
  },
  setContactNo: (data: string) => {
    set(
      produce((state: RepairOrderState) => {
        state.contactNo = data;
      })
    );
  },
}));
