// Define the state interface
export interface RepairOrderState {
  itemCode: string;
  items: string;
  problemEncountered: string;
  repairDate: string;
}

// Define the actions interface
export interface RepairOrderActions {
  setItemCode: (data: string) => void;
  setItems: (data: string) => void;
  setProblemEncountered: (data: string) => void;
  setRepairDate: (data: string) => void;
}
