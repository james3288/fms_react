import { useEffect } from "react";
import Acordion from "../../../../acordion/acordion";
import { facilities } from "../../../../typeProps/typeProps";
import FacilitiesLeftColumn from "../../facilitiesLeftColumn/FacilitiesLeftColumn";
import FacilitiesRightColumn from "../FacilitiesRightColumn";
import FacilitiesRightColumnBorrowerHistory from "../facilitiesRightColumnBorrowerHistory";

type listOfItemsProps = {
  data: facilities;
  page: string;
};

const ListOfItems = ({ data, page }: listOfItemsProps) => {
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
              <Acordion title="DT-101" id={1} items={data} />
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
