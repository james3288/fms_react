import { facilityHistory } from "../typeProps/typeProps";

export interface facilityHistoryState {
  itemCode: string;
  search: string;
  facilityHistory: facilityHistory[]; // Ensure this is not optional if you're initializing it
}

export interface facilityHistoryAction {
  setSearch: (param: string) => void;
  setFacilityHistory: (param: facilityHistory[]) => void;
}
