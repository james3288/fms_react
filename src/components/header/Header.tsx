import { useContext } from "react";
import adfilLogo from "./../../assets/img/adfil-dragon-raw.png";
import Navigation from "./navigation/Navigation";
import SearchBar from "./searchbar/SearchBar";
import { AppContext, AppContextType } from "../context/AppContext";

const Header = () => {
  const contextValue = useContext<AppContextType>(AppContext);

  const handleToggleButton = () => {
    contextValue.setToggle((prev) => !prev);
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="" className="logo d-flex align-items-center">
          <img src={adfilLogo} alt="" style={{ maxHeight: "40px" }} />
          <span className="d-none d-lg-block">ADFIL FMS</span>
        </a>
        <i
          className="bi bi-list toggle-sidebar-btn"
          onClick={handleToggleButton}
        ></i>
      </div>

      {/* searchbar */}
      <SearchBar />

      {/* navigation */}
      <Navigation />
    </header>
  );
};

export default Header;
