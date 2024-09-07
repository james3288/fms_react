import { facilities } from "../../../../typeProps/typeProps";
import FacilitiesLeftColumn from "../../facilitiesLeftColumn/FacilitiesLeftColumn";
import FacilitiesRightColumn from "../FacilitiesRightColumn";
import FacilitiesRightColumnBorrowerHistory from "../facilitiesRightColumnBorrowerHistory";
import folder from "../../../../../assets/img/folder.png";
type listOfItemsProps = {
  data: facilities;
  page: string;
};

const ListOfItems = ({ data, page }: listOfItemsProps) => {
  return (
    <>
      <div className="row" key={data.item_code_id}>
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
              <div className="card-title f-title">
                <a href="">
                  <img src={folder} width={32} height={32} />
                </a>
                <h3>{data.item_code}</h3>
              </div>
              <FacilitiesRightColumnBorrowerHistory
                item_code={data.item_code}
                item_name={data.item_name}
              />
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
