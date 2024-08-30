import { listOfPackages } from "../../../get/getPackages";
import CodeViewIcon from "../../../icons/CodeViewIcon";
import Facilities from "../../../main/facilities/Facilities";
import { facilities } from "../../../typeProps/typeProps";
import "./facilitiesRightColumn.scss";
import Packages from "./packages/Packages";

const FacilitiesRightColumn = () => {
  return (
    <>
      {" "}
      {/* TITLE */}
      <h5 className="card-title">
        Desktop <span> | served 2 minutes ago</span>
      </h5>
      {/* BODY */}
      <div className="card" style={{ marginBottom: "20px" }} id="top_right_id">
        <div className="card-header bg-light fs-4">item code</div>
        <div className="card-body p-3">
          <div className="card-title p-0">
            <i className="ri-checkbox-multiple-fill"></i>
            Desktop - Asus
          </div>
          <div className="card-title p-1 fs-6 text-white badge bg-success m-right">
            Served
            <i className="ri-arrow-right-s-fill"></i>
          </div>

          <div className="card-title p-1 fs-6 text-white badge bg-primary m-right">
            King James Uayan <i className="ri-arrow-right-s-fill"></i>
          </div>

          <div className="card-title p-1 fs-6 text-white badge bg-secondary m-right">
            Repaired <i className="ri-arrow-right-s-fill"></i>
          </div>

          <ul className="list-group">
            <li className="list-group-item p-1">
              {/* <i className="ri-arrow-right-s-fill text-info"></i> */}
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Date Borrowed: 01/22/24
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Aquisition Date: 01/22/24
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Project: Butuan City
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Location: Agusan del Norte
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">RS No: 93435</span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Serial No: 934929325
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">BS No: 394355</span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Maintenance Schedule: 02/24/24
              </span>
            </li>
            <li className="list-group-item p-1">
              <CodeViewIcon />{" "}
              <span className="card-title item-fonts">
                Last Date Maintenance Schedule: 02/24/24
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* PACKAGES */}
      <Packages packageItems={listOfPackages} />
    </>
  );
};

export default FacilitiesRightColumn;
