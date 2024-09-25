// import ChevroDown from "./icons/chevroDown";

// import { useContext } from "react";
// import { AppContext, AppContextType } from "./context/AppContext";
import "./sideBar.scss";
import getter from "./getter/getter";
import SideBarItems from "./sideBarItems/sideBarItems";

const SideBar = () => {
  // const contextValue = useContext<AppContextType>(AppContext);
  const toggleSideBar = getter().cToggleSideBar;
  return (
    <aside
      id="sidebar"
      className={toggleSideBar ? "sidebar toggle-sidebar" : "sidebar"}
    >
      <SideBarItems />
    </aside>
  );
};

export default SideBar;
