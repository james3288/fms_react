import { useContext } from "react";
import { AppContext, AppContextType } from "../context/AppContext";
import RecentActivity from "./recentActivity/RecentActivity";
import ComputerMaintenanceCleaning from "./computerMaintenance/ComputerMaintenanceCleaning";
import "./recentActivity.scss";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import FacilitiesPage from "../pages/facilitiesPage/FacilitiesPage";
import BorrowerHistoryPage from "../pages/borrowerHistoryPage/BorrowerHistoryPage";
import getter from "../getter/getter";

const Main = () => {
  // const contextValue = useContext<AppContextType>(AppContext);
  const toggleSideBar = getter().cToggleSideBar;
  return (
    <>
      <main id="main" className={toggleSideBar ? "main toggle-main" : "main"}>
        <section className="section dashboard">
          <div className="row">
            {/* left side column */}

            {/* FOR FACILITIES PAGE */}
            {/* <FacilitiesPage /> */}

            <BorrowerHistoryPage />
            {/* FOR DASHBOARD PAGE */}
            {/* <DashboardPage /> */}

            {/* right side column */}
            <div className="col-lg-4">
              <RecentActivity />
              <ComputerMaintenanceCleaning />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
