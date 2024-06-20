import React, { createContext, useState } from "react";

export interface AppContextType {
  toggle: boolean; // Use lowercase 'boolean'
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  toggle: false,
  setToggle: () => {},
});

export const AppProvider = ({ children }: any) => {
  // Add type annotation for props
  const [toggleSideBar, setToggleSidebar] = useState<boolean>(false); // Use lowercase 'boolean'

  const contextValue: AppContextType = {
    toggle: toggleSideBar,
    setToggle: setToggleSidebar,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
