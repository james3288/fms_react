import { useEffect } from "react";
import RecentActivity from "./recentActivity/RecentActivity";
import ComputerMaintenanceCleaning from "./computerMaintenance/ComputerMaintenanceCleaning";
import "./recentActivity.scss";
import BorrowerHistoryPage from "../pages/borrowerHistoryPage/BorrowerHistoryPage";
import getter from "../getter/getter";
import setter from "../setter/setter";
import useUploadedImagesForItemCode from "../customHooks/useItemCodeImages";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import SupplierPriceUpdate from "./supplierPriceUpdate/SupplierPriceUpdate";

const Main = () => {
  // const contextValue = useContext<AppContextType>(AppContext);
  const toggleSideBar = getter().cToggleSideBar;

  // setter
  const setListOfItemCodeImages = setter().cSetListOfItemCodeImages;
  const {
    uploadedImagesFormItemCode: uif,
    // status: status2,
    // error: error2,
  } = useUploadedImagesForItemCode();

  useEffect(() => {
    setListOfItemCodeImages(uif?.listOfUploadedImages);
  }, [uif]); // Dependency array makes sure this runs only when 'uif' changes
  return (
    <>
      <main id="main" className={toggleSideBar ? "main toggle-main" : "main"}>
        <section className="section dashboard">
          <div className="row">
            {/* left side column */}

            {/* FOR FACILITIES PAGE */}
            {/* <FacilitiesPage /> */}

            {/* FOR BORROWER HISTORY PAGE */}
            {/* <BorrowerHistoryPage /> */}

            {/* FOR DASHBOARD PAGE */}
            <DashboardPage />

            {/* right side column */}
            <div className="col-lg-4">
              {/* <RecentActivity /> */}
              {/* <ComputerMaintenanceCleaning /> */}
              <SupplierPriceUpdate />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
