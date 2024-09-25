import { createContext, ReactNode, useState } from "react";
import { ManPowerInterface } from "../interfaces/repairOrderInterfaces";
import ManPowerInput from "../formElements/manPowerInput";

export interface ManPowerContextType {
  cMp: ManPowerInterface[];
  cSetMp: React.Dispatch<React.SetStateAction<ManPowerInterface[]>>;
  cCounter: number;
  cSetCounter: React.Dispatch<React.SetStateAction<number>>;
  cHandleAddManpower: any;
}

export const ManPowerContext = createContext<ManPowerContextType>({
  cMp: [],
  cSetMp: () => {},
  cCounter: 1,
  cSetCounter: () => {},
  cHandleAddManpower: () => {},
});

export const ManPowerProvider = ({ children }: { children: ReactNode }) => {
  const [mp, setMp] = useState<ManPowerInterface[]>([]);
  const [counter, setCounter] = useState(0);

  // add Manpower
  const handleAddManpower = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined
  ) => {
    e?.preventDefault();

    setCounter((prev) => prev + 1);

    const newManPower = {
      id: counter,
      MP: <ManPowerInput id={counter} />,
    };

    setMp((prev) => [...prev, newManPower]);
  };

  const contextValue: ManPowerContextType = {
    cMp: mp,
    cSetMp: setMp,
    cCounter: counter,
    cSetCounter: setCounter,
    cHandleAddManpower: handleAddManpower,
  };

  return (
    <ManPowerContext.Provider value={contextValue}>
      {children}
    </ManPowerContext.Provider>
  );
};
