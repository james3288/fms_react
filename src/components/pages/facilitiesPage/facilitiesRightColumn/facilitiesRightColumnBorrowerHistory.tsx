import Alerts from "../../../alerts/Alerts";
import BorrowerHistoryItems from "./borrowerHistoryItems/BorrowerHistoryItems";
import "./facilitiesRightColumn.scss";
import Packages from "./packages/Packages";

const FacilitiesRightColumnBorrowerHistory = () => {
  return (
    <>
      {/* PACKAGES */}
      <Packages />

      {/* TITLE */}

      <h5 className="card-title">
        BORROWER HISTORY <span> | BY SPECIFIC</span>
      </h5>
      <Alerts option="success" message="22 has been found" />
      <BorrowerHistoryItems />
      <BorrowerHistoryItems />
    </>
  );
};

export default FacilitiesRightColumnBorrowerHistory;
