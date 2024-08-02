import CreateRepairOrderModal from "../../modals/CreateRepairOrderModal";
import ListOfItems from "./facilitiesRightColumn/listOfItems/ListOfItems";

const FacilitiesPage = () => {
  return (
    <>
      <div className="col-lg-8 col-xs-12">
        <ListOfItems page="facilities" />
        <hr className="fac-separator" />
        <ListOfItems page="facilities" />
      </div>
      <CreateRepairOrderModal id="modalDialogScrollable" />
    </>
  );
};

export default FacilitiesPage;
