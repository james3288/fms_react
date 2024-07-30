// Define the state interface
export interface RepairOrderState {
  itemCode: string;
  items: string;
}

// Define the actions interface
export interface RepairOrderActions {
  setItemCode: (data: string) => void;
  setItems: (data: string) => void;
}
