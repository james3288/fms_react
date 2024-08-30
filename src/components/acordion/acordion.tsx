import Alerts from "../alerts/Alerts";
import { listOfBorrowerItems } from "../get/getBorrowerHistory";
import { listOfPackages } from "../get/getPackages";
import BorrowerHistoryItems from "../pages/facilitiesPage/facilitiesRightColumn/borrowerHistoryItems/BorrowerHistoryItems";
import Packages from "../pages/facilitiesPage/facilitiesRightColumn/packages/Packages";
import { acordionProps } from "../typeProps/typeProps";

const Acordion = ({ title, id, items }: acordionProps) => {
  return (
    <div className="card">
      <div className="card-body borrower-body">
        <h5 className="card-title">{items.item_code}</h5>

        {/* <!-- Default Accordion --> */}
        <div className="accordion" id="accordionExample">
          {/* packages */}
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id={`headingOne-${items.item_code_id}`}
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseOne-${items.item_code_id}`}
                aria-expanded="true"
                aria-controls={`collapseOne-${items.item_code}`}
              >
                PACKAGES
              </button>
            </h2>
            <div
              id={`collapseOne-${items.item_code_id}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`headingOne-${items.item_code_id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <>
                  {/* PACKAGES */}
                  <Packages packageItems={listOfPackages} />
                </>
              </div>
            </div>
          </div>
          {/* history */}
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id={`headingTwo-${items.item_code_id}`}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseTwo-${items.item_code_id}`}
                aria-expanded="false"
                aria-controls={`collapseTwo-${items.item_code_id}`}
              >
                HISTORY
              </button>
            </h2>
            <div
              id={`collapseTwo-${items.item_code_id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`headingTwo-${items.item_code_id}`}
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
