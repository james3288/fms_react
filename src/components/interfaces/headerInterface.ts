export interface headerState {
  toggleSearchBar: boolean; // Ensure this is not optional if you're initializing it
  toggleSideBar: boolean;
}

export interface headerAction {
  setToggleSearchBar: (param: boolean) => void;
  setToggleSideBar: (param: boolean) => void;
}
