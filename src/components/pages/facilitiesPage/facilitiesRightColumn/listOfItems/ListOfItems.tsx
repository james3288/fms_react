import Acordion from "../../../../acordion/acordion";
import FacilitiesLeftColumn from "../../facilitiesLeftColumn/FacilitiesLeftColumn";
import FacilitiesRightColumn from "../FacilitiesRightColumn";
import FacilitiesRightColumnBorrowerHistory from "../facilitiesRightColumnBorrowerHistory";

type listOfItemsProps = {
  page: string;
};

const ListOfItems = ({ page }: listOfItemsProps) => {
  return (
    <>
      <div className="row">
        {/*  LEFT COLUMN */}
        <div className="col-lg-5 col-xs-12">
          <FacilitiesLeftColumn page={page} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-7 col-xs-12">
          {page === "facilities" ? (
            <FacilitiesRightColumn />
          ) : page === "borrower-history" ? (
            <>
              <Acordion title="DT-101" id={1} />
              <Acordion title="DT-102" id={2} />
              <Acordion title="DT-103" id={3} />
              {/* <FacilitiesRightColumnBorrowerHistory /> */}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ListOfItems;
