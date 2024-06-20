import CreateRepairOrderModal from "../../modals/CreateRepairOrderModal";
import ListOfItems from "./facilitiesRightColumn/listOfItems/ListOfItems";

const FacilitiesPage = () => {
  return (
    <>
      <div className="col-lg-8 col-xs-12">
        <ListOfItems />
        <hr className="fac-separator" />
        <ListOfItems />
      </div>
      <CreateRepairOrderModal id="modalDialogScrollable" />
    </>
  );
};

export default FacilitiesPage;
    