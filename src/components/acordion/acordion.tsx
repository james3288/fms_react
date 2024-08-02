import Alerts from "../alerts/Alerts";
import BorrowerHistoryItems from "../pages/facilitiesPage/facilitiesRightColumn/borrowerHistoryItems/BorrowerHistoryItems";
import Packages from "../pages/facilitiesPage/facilitiesRightColumn/packages/Packages";
import {
  acordionProps,
  itemHistoryProps,
  packageItemProps,
} from "../typeProps/typeProps";

const Acordion = ({ title, id }: acordionProps) => {
  const items: packageItemProps = {
    status: "served",
    location: "ITD",
    items: "Computer2",
  };

  const items2: packageItemProps = {
    status: "served",
    location: "ACT",
    items: "Computer",
  };

  const listOfItems: packageItemProps[] = [items, items2];

  const itemHistory: itemHistoryProps = {
    itemCode: "DT-01",
    itemName: "Computer",
    status: "served",
    custodian: "King James",
    date_borrowed: "2024-01-01",
    mto_no: "34-53",
    custodianLocation: "CBR",
    location: "Cabadbaran",
    department: "ITD",
    turnover_to: "Mak2x",
    date_turnover: "none",
    submitted_date: "2024-01-01",
    noted_by: "none",
  };

  const listOfBorrowerItems: itemHistoryProps[] = [
    itemHistory,
    itemHistory,
    itemHistory,
  ];

  return (
    <div className="card">
      <div className="card-body borrower-body">
        <h5 className="card-title">{title}</h5>

        {/* <!-- Default Accordion --> */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`headingOne-${id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseOne-${id}`}
                aria-expanded="true"
                aria-controls={`collapseOne-${id}`}
              >
                PACKAGES
              </button>
            </h2>
            <div
              id={`collapseOne-${id}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`headingOne-${id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <>
                  {/* PACKAGES */}
                  <Packages packageItems={listOfItems} />
                </>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`headingTwo-${id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseTwo-${id}`}
                aria-expanded="false"
                aria-controls={`collapseTwo-${id}`}
              >
                HISTORY
              </button>
            </h2>
            <div
              id={`collapseTwo-${id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`headingTwo-${id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* TITLE */}
                <Alerts option="success" message="5 history has been found!" />
                <h5 className="card-title">
                  COMPUTER DESKTOP <span> | BY SPECIFIC</span>
                </h5>

                <BorrowerHistoryItems itemHistory={listOfBorrowerItems} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Default Accordion Example --> */}
      </div>
    </div>
  );
};

export default Acordion;
