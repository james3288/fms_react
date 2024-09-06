import { useFacilityHistoryStore } from "../store/useFacilityHistory";
// setter
const setter = () => {
  const { cSetSearch } = useFacilityHistoryStore((state) => ({
    cSetSearch: state.setSearch,
  }));

  return { cSetSearch };
};

export default setter;
