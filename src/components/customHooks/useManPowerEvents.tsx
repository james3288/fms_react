import { useContext } from "react";
import { ManPowerContext } from "../context/ManPowerContext";
import ManPowerInput from "../formElements/manPowerInput";

const UseManPowerEvents = () => {
  const { cMp, cHandleAddManpower } = useContext(ManPowerContext);

  return (
    <>
      <div className="total-cost-repair">
        <h5 className="card-title">Quantity of Manpower Needed:</h5>
        <a
          className="bi bi-plus-circle-fill plus"
          onClick={cHandleAddManpower}
        ></a>
      </div>
      <div id="addManpower">
        <ManPowerInput id={0} />
        {cMp.map((m) => (
          <div key={m.id}>{m.MP}</div>
        ))}
      </div>
    </>
  );
};

export default UseManPowerEvents;
