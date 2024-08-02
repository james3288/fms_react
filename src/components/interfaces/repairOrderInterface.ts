// Define the state interface
export interface RepairOrderState {
  itemCode: string;
  items: string;
  problemEncountered: string;
  repairDate: string;
  deliveredBy: string;
  receivedBy: string;
  contactNo: string;
}

// Define the actions interface
export interface RepairOrderActions {
  setItemCode: (data: string) => void;
  setItems: (data: string) => void;
  setProblemEncountered: (data: string) => void;
  setRepairDate: (data: string) => void;
  setDeliveredBy: (data: string) => void;
  setReceivedBy: (data: string) => void;
  setContactNo: (data: string) => void;
}
