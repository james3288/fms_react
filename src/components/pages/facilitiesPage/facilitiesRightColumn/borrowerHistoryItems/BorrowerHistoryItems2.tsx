import { useState } from "react";
import useFacilityHistory from "../../../../customHooks/useFacilityHistory";
import {
  createRepairOrderModalProps,
  distinctFacilityHistory,
} from "../../../../typeProps/typeProps";

import FormatDateOnly from "../../../../../others/formatDateOnly";

import CreateRepairOrderModal2 from "../../../../modals/CreateRepairOrderModal2";
import { ItemStatusNew, ItemStatusOld } from "../../../../enum/itemStatusEnum";

const recorrectStatusName = (status: string) => {
  return status === ItemStatusOld.Turnover
    ? ItemStatusNew.Turnover
    : status === ItemStatusOld.Served
    ? ItemStatusNew.Served
    : status === ItemStatusOld.Vacant
    ? ItemStatusNew.Vacant
    : status === ItemStatusOld.Disposed
    ? ItemStatusNew.Disposed
    : status === ItemStatusOld.ForDisposal
    ? ItemStatusNew.ForDisposal
    : status === ItemStatusOld.LowSpecs
    ? ItemStatusNew.LowSpecs
    : status === ItemStatusOld.LostItem
    ? ItemStatusNew.LostItem
    : "";
};

const getStatusCircleColor = (status: string) => {
  return status === ItemStatusOld.Turnover
    ? "turnover-circle-color"
    : status === ItemStatusOld.Served
    ? "served-circle-color"
    : status === ItemStatusOld.Vacant
    ? "vacant-circle-color"
    : status === ItemStatusOld.Disposed
    ? "disposed-circle-color"
    : status === ItemStatusOld.ForDisposal
    ? "for-disposal-circle-color"
    : status === ItemStatusOld.LowSpecs
    ? "for-disposal-circle-color"
    : status === ItemStatusOld.LostItem
    ? "disposed-circle-color"
    : "";
};

const getStatusColor = (status: string) => {
  return status === ItemStatusOld.Turnover
    ? "turnover-bg-color"
    : status === ItemStatusOld.Served
    ? "served-bg-color"
    : status === ItemStatusOld.Vacant
    ? "vacant-bg-color"
    : status === ItemStatusOld.Disposed
    ? "disposed-bg-color"
    : status === ItemStatusOld.ForDisposal
    ? "for-disposal-bg-color"
    : status === ItemStatusOld.LowSpecs
    ? "for-disposal-bg-color"
    : status === ItemStatusOld.LostItem
    ? "disposed-bg-color"
    : "";
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

  const [modalParam, setModalParam] = useState<createRepairOrderModalProps>();

  // handle create repair order
  const handleCreateRepairOrder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemCode: string
  ) => {
    e.preventDefault();

    const { cItemCode }: createRepairOrderModalProps = {
      cItemCode: itemCode,
    };

    setModalParam({ cItemCode });
  };

  if (status === "pending") return "";

  return (
    <>
      <div className="card" id={`id_${item_code}`}>
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
                    {FormatDateOnly(item.date_borrowed_turnover)}
                  </span>
                </div>
                <i
                  className={`bi bi-circle-fill activity-badge text-primary align-self-start ${getStatusCircleColor(
                    item.serve_status
                  )}`}
                ></i>
                <div className="activity-content borrower-text">
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    {item.item_name_desc_id} {item.brand}
                  </span>{" "}
                  - {item.custodian_name} <br /> {item.current_location}
                  <br />
                  <span>
                    MTO NO - <b>{item.mt_no} </b>
                  </span>
                  <br />
                  <span>
                    RS NO - <b>{item.rs_no} </b>
                  </span>
                  <br />
                  <span>
                    SERIAL NO - <b>{item.serial_no}</b>
                  </span>
                  <br />
                  <a href="#" className="fw-bold text-dark">
                    <span className="ts-color">
                      {`${recorrectStatusName(
                        item.serve_status
                      )} - ${item.status_item.toLocaleLowerCase()}`}
                    </span>
                  </a>
                  <br />
                  {item.mt_no != null &&
                    item.transfer_to != null &&
                    item.serve_status !== ItemStatusOld.Disposed && (
                      <code
                        style={{
                          fontSize: "14px",
                          color: "green",
                        }}
                      >
                        Note: This item has been{" "}
                        <span className="">served</span> now to{" "}
                        <b>{item.transfer_to}</b>
                      </code>
                    )}
                  <br />
                  <br />
                  {item.serve_status !== ItemStatusOld.Turnover && (
                    <button
                      type="button"
                      className="cro-color"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDialogScrollable"
                      onClick={(e) => {
                        handleCreateRepairOrder(e, item.item_code);
                      }}
                    >
                      Create Repair Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* create repair order modal */}
      <CreateRepairOrderModal2 {...modalParam} />
    </>
  );
};

export default BorrowerHistoryItems2;
