import { useFacilityHistoryStore } from "../store/useFacilityHistory";

import React from "react";
import { useHeaderStore } from "../store/useHeaderStore";

const getter = () => {
  // getter
  const { cSearch } = useFacilityHistoryStore((state) => ({
    cSearch: state.search,
  }));

  const { cToggleSearchBar } = useHeaderStore((state) => ({
    cToggleSearchBar: state.toggleSearchBar,
  }));

  const { cToggleSideBar } = useHeaderStore((state) => ({
    cToggleSideBar: state.toggleSideBar,
  }));

  return { cSearch, cToggleSearchBar, cToggleSideBar };
};

export default getter;
