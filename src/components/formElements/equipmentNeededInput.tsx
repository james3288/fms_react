import { useContext, useState } from "react";
import { EquipmentNeededContext } from "../context/EquipmentNeededContext";

type props = {
  id: number;
};

const EquipmentNeededInput = (props: props) => {
  const { cEn, cSetEn, cSetCounter } = useContext(EquipmentNeededContext);
  const [value, setValue] = useState<string | undefined>("");

  const handleRemoveEquipmentNeeded = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined
  ) => {
    e?.preventDefault();

    const updateEn = cEn.filter((item) => item.id !== props.id);
    cSetEn(updateEn);
    cSetCounter((prev) => prev - 1);
  };

  const handleOnValueChange = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setValue(e?.target.value);
  };

  return (
    // <div className="manpower-needed">
    //   <div className="form-floating mb-1" style={{ width: "90%" }}>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="floatingInput"
    //       placeholder="name@example.com"
    //       onChange={handleOnValueChange}
    //       value={value}
    //     />
    //     <label htmlFor="floatingInput">Equipment Needed</label>
    //   </div>
    //   <a
    //     className="bi bi-dash-circle-fill minus"
    //     onClick={handleRemoveEquipmentNeeded}
    //   ></a>
    // </div>
    <div className="manpower-needed">
      <div className="input-group mb-1" style={{ width: "90%" }}>
        <span className="input-group-text" id="basic-addon1">
          Equipment Needed
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Noted By"
          aria-describedby="basic-addon1"
          onChange={handleOnValueChange}
          value={value}
        />
      </div>
      <a
        className="bi bi-dash-circle-fill minus"
        onClick={handleRemoveEquipmentNeeded}
      ></a>
    </div>
  );
};

export default EquipmentNeededInput;
