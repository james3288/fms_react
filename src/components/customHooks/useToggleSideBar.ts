import getter from "../getter/getter";
import setter from "../setter/setter";

const useToggleSideBar = () => {
  const toggleSideBar = getter().cToggleSideBar;
  const setToggleSideBar = setter().cSetToggleSideBar;

  const handleToggleButton = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return handleToggleButton;
};

export default useToggleSideBar;
