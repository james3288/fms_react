import { useEffect, useState } from "react";
import useFacilityHistory from "../../../../customHooks/useFacilityHistory";
import {
  distinctFacilityHistory,
  facilityHistory,
} from "../../../../typeProps/typeProps";
import FacilityHistoryLoading from "../../../../loadingEffect/facilityHistoryLoading";

const recorrectStatusName = (status: string) => {
  return status === "Turn-over"
    ? "turnover"
    : status === "Serve"
    ? "served"
    : status === "Vacant"
    ? "vacant"
    : status === "Disposed"
    ? "disposed"
    : status === "For Disposal"
    ? "for-disposal"
    : "";
};

const getStatusCircleColor = (status: string) => {
  return status === "Turn-over"
    ? "turnover-circle-color"
    : status === "Serve"
    ? "served-circle-color"
    : status === "Vacant"
    ? "vacant-circle-color"
    : status === "Disposed"
    ? "disposed-circle-color"
    : status === "For Disposal"
    ? "for-disposal-circle-color"
    : "";
};

const getStatusColor = (status: string) => {
  return status === "Turn-over"
    ? "turnover-bg-color"
    : status === "Serve"
    ? "served-bg-color"
    : status === "Vacant"
    ? "vacant-bg-color"
    : status === "Disposed"
    ? "disposed-bg-color"
    : status === "For Disposal"
    ? "for-disposal-bg-color"
    : "";
};

const handleCreateRepairOrder = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  console.log("hello");
};

const BorrowerHistoryItems2 = ({
  item_code,
  item_name,
  brand,
}: distinctFacilityHistory) => {
  const {
    facilityHistory: fh,
    status,
    error,
  } = useFacilityHistory(item_code, item_name);

  if (status === "pending") return "";

  return (
    <>
      <div className="card">
        <div className="filter">
          <a className="icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Today
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Month
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Year
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            {item_name} <span>| RS# {"324242"}</span>
          </h5>
          <div className="activity">
            {fh?.data?.map((item) => (
              <div className="activity-item d-flex" key={item.custodian_id}>
                <div className="activite-label">
                  <span className={`${getStatusColor(item.serve_status)}`}>
                    08-14-23
                  </span>
                </div>
                <i
                  className={`bi bi-circle-fill activity-badge text-primary align-self-start ${getStatusCircleColor(
                    item.serve_status
                  )}`}
                ></i>
                <div className="activity-content borrower-text">
                  <span style={{ fontWeight: "600" }}>{item.brand}</span> -{" "}
                  {item.custodian_name} <br /> {item.current_location}
                  <br />
                  <span>
                    MTO NO - <b>{item.mt_no} </b>
                  </span>
                  <br />
                  <span>SERIAL NO - {item.serial_no}</span>
                  <br />
                  <a href="#" className="fw-bold text-dark">
                    <span className="ts-color">
                      {recorrectStatusName(item.serve_status)}
                    </span>
                  </a>
                  <br />
                  <br />
                  {recorrectStatusName(item.serve_status) != "turnover" && (
                    <a
                      href=""
                      className="fw-bold text-dark"
                      onClick={handleCreateRepairOrder}
                    >
                      <span className="cro-color">Create Repair Order</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowerHistoryItems2;
