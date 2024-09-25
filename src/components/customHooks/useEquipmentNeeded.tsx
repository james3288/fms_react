import { useContext } from "react";
import { EquipmentNeededContext } from "../context/EquipmentNeededContext";
import EquipmentNeededInput from "../formElements/equipmentNeededInput";

const UseEquipmentNeeded = () => {
  const { cEn, cHandleAddEquipmentNeeded } = useContext(EquipmentNeededContext);
  return (
    <>
      <div className="total-cost-repair">
        <h5 className="card-title">Quantity of Equipment Needed:</h5>
        <a
          className="bi bi-plus-circle-fill plus"
          onClick={cHandleAddEquipmentNeeded}
        ></a>
      </div>
      <div id="addEquipmentNeeded">
        <EquipmentNeededInput id={0} />
        {cEn.map((m) => (
          <div key={m.id}>{m.EN}</div>
        ))}
      </div>
    </>
  );
};

export default UseEquipmentNeeded;
