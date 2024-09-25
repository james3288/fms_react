import { useContext, useState } from "react";
import { ManPowerContext } from "../context/ManPowerContext";

type props = {
  id: number;
};

const ManPowerInput = (props: props) => {
  const { cMp, cSetMp, cSetCounter } = useContext(ManPowerContext);
  const [value, setValue] = useState<string | undefined>("");

  const handleRemoveManPower = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined
  ) => {
    e?.preventDefault();

    const updateMp = cMp.filter((item) => item.id !== props.id);
    cSetMp(updateMp);
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
    //     <label htmlFor="floatingInput">Man Power</label>
    //   </div>
    //   <a
    //     className="bi bi-dash-circle-fill minus"
    //     onClick={handleRemoveManPower}
    //   ></a>
    // </div>

    <div className="manpower-needed">
      <div className="input-group mb-1" style={{ width: "90%" }}>
        <span className="input-group-text" id="basic-addon1">
          Manpower
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
        onClick={handleRemoveManPower}
      ></a>
    </div>
  );
};

export default ManPowerInput;
