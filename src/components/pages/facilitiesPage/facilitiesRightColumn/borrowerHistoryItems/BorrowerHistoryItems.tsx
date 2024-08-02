import CodeViewIcon from "../../../../icons/CodeViewIcon";
import { borrowerItemsProps } from "../../../../typeProps/typeProps";

const BorrowerHistoryItems = ({ itemHistory }: borrowerItemsProps) => {
  return (
    <>
      {/* BODY */}
      <div className="card" style={{ marginBottom: "20px" }} id="top_right_id">
        {/* <div className="card-header bg-light fs-4">DT-101</div> */}
        {itemHistory?.map((item) => (
          <div className="card-body p-3">
            <div className="card-title p-0">
              <i className="ri-checkbox-multiple-fill"></i>
              {item.itemCode}
            </div>
            <div className="card-title p-1 fs-6 text-white badge bg-primary m-right">
              {item.status}
              <i className="ri-arrow-right-s-fill"></i>
            </div>

            <div className="card-title p-1 fs-6 text-white badge bg-success m-right">
              {item.custodian}
              <i className="ri-arrow-right-s-fill"></i>
            </div>

            <ul className="list-group">
              <li className="list-group-item p-1">
                {/* <i className="ri-arrow-right-s-fill text-info"></i> */}
                <CodeViewIcon />
                Date Borrowed:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.date_borrowed}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                MTO NO:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.mto_no}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                Custodian:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.custodianLocation}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                Location:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.location}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                Department:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.department}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                Turnover To:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.turnover_to}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon /> Date Turnover{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  : {item.date_turnover}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon />
                Submitted Date:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.submitted_date}
                </span>
              </li>
              <li className="list-group-item p-1">
                <CodeViewIcon /> Noted By:{" "}
                <span
                  className="card-title"
                  style={{ fontSize: "10px !important" }}
                >
                  {item.noted_by}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default BorrowerHistoryItems;
