import { createContext, ReactNode, useState } from "react";
import { EquipmentNeededInterface } from "../interfaces/repairOrderInterfaces";
import EquipmentNeededInput from "../formElements/equipmentNeededInput";

export interface EquipmentNeededType {
  cEn: EquipmentNeededInterface[];
  cSetEn: React.Dispatch<React.SetStateAction<EquipmentNeededInterface[]>>;
  cCounter: number;
  cSetCounter: React.Dispatch<React.SetStateAction<number>>;
  cHandleAddEquipmentNeeded: any;
}

export const EquipmentNeededContext = createContext<EquipmentNeededType>({
  cEn: [],
  cSetEn: () => {},
  cCounter: 1,
  cSetCounter: () => {},
  cHandleAddEquipmentNeeded: () => {},
});

export const EquipmentNeededProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [en, setEn] = useState<EquipmentNeededInterface[]>([]);
  const [counter, setCounter] = useState(0);

  // add Equipment Needed
  const handleAddEquipmentNeeded = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined
  ) => {
    e?.preventDefault();

    setCounter((prev) => prev + 1);

    const newEquipmentNeeded = {
      id: counter,
      EN: <EquipmentNeededInput id={counter} />,
    };

    setEn((prev) => [...prev, newEquipmentNeeded]);
  };

  const contextValue: EquipmentNeededType = {
    cEn: en,
    cSetEn: setEn,
    cCounter: counter,
    cSetCounter: setCounter,
    cHandleAddEquipmentNeeded: handleAddEquipmentNeeded,
  };

  return (
    <EquipmentNeededContext.Provider value={contextValue}>
      {children}
    </EquipmentNeededContext.Provider>
  );
};
