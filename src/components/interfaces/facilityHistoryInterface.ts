import {
  facilityHistory,
  uploadImageForItemCodeType,
} from "../typeProps/typeProps";

export interface facilityHistoryState {
  itemCode: string;
  search: string;
  facilityHistory: facilityHistory[]; // Ensure this is not optional if you're initializing it
}

export interface facilityHistoryAction {
  setSearch: (param: string) => void;
  setFacilityHistory: (param: facilityHistory[]) => void;
}

export interface uploadItemCodeImageState {
  itemCode: string;
  itemCode2: string;
  listOfItemCodeImages: uploadImageForItemCodeType[];
}

export interface uploadItemCodeImageAction {
  setItemCode: (param: string) => void;
  setItemCode2: (param: string) => void;
  setListOfItemCodeImages: (
    param: uploadImageForItemCodeType[] | undefined
  ) => void;
}
