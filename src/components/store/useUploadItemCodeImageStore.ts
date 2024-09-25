import { create } from "zustand";
import { produce } from "immer";
import {
  uploadItemCodeImageAction,
  uploadItemCodeImageState,
} from "../interfaces/facilityHistoryInterface";
import { uploadImageForItemCodeType } from "../typeProps/typeProps";

type uploadItemCodeImageStore = uploadItemCodeImageAction &
  uploadItemCodeImageState;

const initialState: uploadItemCodeImageState = {
  itemCode: "",
  itemCode2: "",
  listOfItemCodeImages: [],
};

export const useUploadItemCodeImageStore = create<uploadItemCodeImageStore>(
  (set) => ({
    ...initialState,
    setItemCode: (data: string) => {
      set((state) =>
        produce(state, (draft) => {
          draft.itemCode = data;
        })
      );
    },
    setItemCode2: (data: string) => {
      set((state) =>
        produce(state, (draft) => {
          draft.itemCode2 = data;
        })
      );
    },
    setListOfItemCodeImages: (
      data: uploadImageForItemCodeType[] | undefined
    ) => {
      set((state) =>
        produce(state, (draft) => {
          draft.listOfItemCodeImages = data ?? [];
        })
      );
    },
  })
);
