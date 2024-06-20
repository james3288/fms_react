import FacilitiesLeftColumn from "../../facilitiesLeftColumn/FacilitiesLeftColumn";
import FacilitiesRightColumn from "../FacilitiesRightColumn";

const ListOfItems = () => {
  return (
    <>
      <div className="row">
        {/*  LEFT COLUMN */}
        <div className="col-lg-5 col-xs-12">
          <FacilitiesLeftColumn />
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-7 col-xs-12">
          <FacilitiesRightColumn />
        </div>
      </div>
    </>
  );
};

export default ListOfItems;
