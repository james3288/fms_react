import { useFacilityHistoryStore } from "../store/useFacilityHistory";
import { useHeaderStore } from "../store/useHeaderStore";
// setter
const setter = () => {
  const { cSetSearch } = useFacilityHistoryStore((state) => ({
    cSetSearch: state.setSearch,
  }));

  const { cSetToggleSearchBar } = useHeaderStore((state) => ({
    cSetToggleSearchBar: state.setToggleSearchBar,
  }));

  const { cSetToggleSideBar } = useHeaderStore((state) => ({
    cSetToggleSideBar: state.setToggleSideBar,
  }));

  return { cSetSearch, cSetToggleSearchBar, cSetToggleSideBar };
};

export default setter;
