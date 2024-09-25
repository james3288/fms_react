import useCountListOfFacilities from "../../customHooks/useCountListOfFacilities";
import ComputerMaintenanceCleaning from "../../main/computerMaintenance/ComputerMaintenanceCleaning";
import DashboardCard from "../../main/dashboardCard/DashboardCard";

const DashboardPage = () => {
  const { borrowed, vacant, disposed, forDisposal, lostItems, lowSpecs } =
    useCountListOfFacilities(5);

  return (
    <div className="col-lg-8">
      <div className="row" id="rowID">
        <DashboardCard
          cardTitle="Served"
          icons={"bi bi-hand-index"}
          noOfdata={borrowed}
          iconColor="blue"
          bgColor="#f6f6fe"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Disposed"
          icons={"bi bi-trash2"}
          noOfdata={disposed}
          iconColor="#2B3E4E"
          bgColor="#81BAEA"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Item Vacant"
          icons={"bi bi-bag-plus-fill"}
          noOfdata={vacant}
          iconColor="darkorange"
          bgColor="#ffecdf"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="For Disposal"
          icons={"bi bi-trash"}
          noOfdata={forDisposal}
          iconColor="#D83049"
          bgColor="#F4CAD0"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Low Specs"
          icons={"bi bi-brightness-low-fill"}
          noOfdata={lowSpecs}
          iconColor="orange"
          bgColor="#FEF2D8"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Lost Items"
          icons={"bi bi-person-x-fill"}
          noOfdata={lostItems}
          iconColor="#9C549A"
          bgColor="#E0C5DF"
          colSize="col-xxl-6 col-md-6"
        />

        <ComputerMaintenanceCleaning />
        {/* <DashboardCard
          cardTitle="Item Defective"
          icons={"bi bi-trash"}
          noOfdata={32}
          iconColor="gray"
          bgColor="#f6f6fe"
          colSize="col-xxl-12 col-md-12"
        /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
