import { useFacilityHistoryStore } from "../store/useFacilityHistory";

import React from "react";

const getter = () => {
  // getter
  const { cSearch } = useFacilityHistoryStore((state) => ({
    cSearch: state.search,
  }));

  return { cSearch };
};

export default getter;
