import CreateRepairOrderModal from "../../modals/CreateRepairOrderModal";
import ListOfItems from "../facilitiesPage/facilitiesRightColumn/listOfItems/ListOfItems";

const BorrowerHistoryPage = () => {
  return (
    <>
      <div className="col-lg-8 col-xs-12">
        <ListOfItems page="borrower-history" />
      </div>
      <CreateRepairOrderModal id="modalDialogScrollable" />
    </>
  );
};

export default BorrowerHistoryPage;
