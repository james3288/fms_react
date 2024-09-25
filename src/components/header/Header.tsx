import adfilLogo from "./../../assets/img/adfil-dragon-raw.png";
import Navigation from "./navigation/Navigation";
import SearchBar from "./searchbar/SearchBar";
import useToggleSideBar from "../customHooks/useToggleSideBar";

const Header = () => {
  const handleToggleButton = useToggleSideBar();

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
