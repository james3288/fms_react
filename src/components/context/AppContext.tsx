import React, { createContext, useState } from "react";

export interface AppContextType {
  toggle: boolean; // Use lowercase 'boolean'
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: string;
  setModalTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  toggle: false,
  setToggle: () => {},
  modalTitle: "baby",
  setModalTitle: () => {},
});

export const AppProvider = ({ children }: any) => {
  // Add type annotation for props
  const [toggleSideBar, setToggleSidebar] = useState<boolean>(false); // Use lowercase 'boolean'
  const [modalTitle, setModalTitle] = useState<string>("");

  const contextValue: AppContextType = {
    toggle: toggleSideBar,
    setToggle: setToggleSidebar,
    modalTitle: modalTitle,
    setModalTitle: setModalTitle,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
