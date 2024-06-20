import DashboardCard from "../../main/dashboardCard/DashboardCard";
import SupplierPriceUpdate from "../../main/supplierPriceUpdate/SupplierPriceUpdate";

const DashboardPage = () => {
  return (
    <div className="col-lg-8">
      <div className="row" id="rowID">
        <DashboardCard
          cardTitle="Borrowed"
          icons={"bi bi-hand-index"}
          noOfdata={2}
          iconColor="blue"
          bgColor="#f6f6fe"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Under Repair"
          icons={"bi bi-tools"}
          noOfdata={32}
          iconColor="green"
          bgColor="#e0f8e9"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Item Vacant"
          icons={"bi bi-bag-plus-fill"}
          noOfdata={32}
          iconColor="darkorange"
          bgColor="#ffecdf"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Item Defective"
          icons={"bi bi-trash"}
          noOfdata={32}
          iconColor="gray"
          bgColor="#f6f6fe"
          colSize="col-xxl-6 col-md-6"
        />
        <DashboardCard
          cardTitle="Item Defective"
          icons={"bi bi-trash"}
          noOfdata={32}
          iconColor="gray"
          bgColor="#f6f6fe"
          colSize="col-xxl-12 col-md-12"
        />

        <SupplierPriceUpdate />
      </div>
    </div>
  );
};

export default DashboardPage;
