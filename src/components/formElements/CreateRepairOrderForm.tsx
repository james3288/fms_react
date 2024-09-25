import "./createReapirOrderForm.scss";
// import ManPowerInput from "./manPowerInput";
import UseManPowerEvents from "../customHooks/useManPowerEvents";
import { ManPowerProvider } from "../context/ManPowerContext";
import UseEquipmentNeeded from "../customHooks/useEquipmentNeeded";
import { EquipmentNeededProvider } from "../context/EquipmentNeededContext";
import MultipleSelectionInput from "./CreateReapirOrderForm2";

const CreateRepairOrderForm = () => {
  //   const [mp, setMp] = useState<ManPowerInterface[]>([]);

  return (
    <form>
      <div className="row mb-5">
        <div className="col-sm-12">
          {/* item code */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Code
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Item Code"
              aria-label="Item Code"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* jo date */}
          <div className="col-sm-12">
            {/* <div className="input-group mb-3">
              <input type="date" className="form-control" />
            </div> */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                J.O Date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <h5 className="card-title">Assessment of Damage</h5>
          <h6 className="assessment-span">
            Describe details of the damage and attach photos:
          </h6>
          {/* describe details of damage */}
          <div className="input-group mb-3">
            <div className="input-group">
              <span className="input-group-text">details</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          <h5 className="card-title">Repair Plan</h5>
          <h6 className="assessment-span">Materials Needed:</h6>
          <div className="input-group mb-3">
            <span className="input-group-text">RS #</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">1 pc</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={"AE011133 Hot Roller"}
              disabled
            />
            <span className="input-group-text">3,596.88</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">4 pcs</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={"AE044073 Stripper Paws"}
              disabled
            />
            <span className="input-group-text">1,199.52</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">2 pcs</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={"D2454174 Pressure Roller Busing"}
              disabled
            />
            <span className="input-group-text">199.36</span>
          </div>
          <div className="total-cost-repair">
            <h5 className="card-title">Total Cost of Repair:</h5>
            <h5 className="card-title">7,268.56</h5>
          </div>

          {/* manpower here */}
          <ManPowerProvider>
            <UseManPowerEvents />
          </ManPowerProvider>
          <hr />
          {/* Equipment needed here */}
          <EquipmentNeededProvider>
            <UseEquipmentNeeded />
          </EquipmentNeededProvider>

          <h5 className="card-title">Estimated Repair Duration:</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">days</span>
          </div>

          <h5 className="card-title">Details of Repair</h5>
          {/* actual start date */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Actual Start Date
            </span>
            <input
              type="date"
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* actual completed date */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Actual Completed Date
            </span>
            <input
              type="date"
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* remarks */}
          <div className="input-group mb-3">
            <div className="input-group">
              <span className="input-group-text">remarks</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          {/* conducted by */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Conducted By
            </span>
            <MultipleSelectionInput />
          </div>

          {/* noted by */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Noted By
            </span>
            <MultipleSelectionInput />
          </div>

          <h5 className="card-title">Inspection/Test Run Details</h5>
          {/* Inspected by */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Inspected By
            </span>
            {/* <input
              type="text"
              className="form-control"
              aria-label="Noted By"
              aria-describedby="basic-addon1"
            /> */}
            <MultipleSelectionInput />
          </div>

          {/* Inspection date */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Inspection Date
            </span>
            <input
              type="date"
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateRepairOrderForm;
