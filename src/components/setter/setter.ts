import { useFacilityHistoryStore } from "../store/useFacilityHistory";
import { useHeaderStore } from "../store/useHeaderStore";
import { useUploadItemCodeImageStore } from "../store/useUploadItemCodeImageStore";
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

  const { cSetItemCode } = useUploadItemCodeImageStore((state) => ({
    cSetItemCode: state.setItemCode,
  }));

  const { cSetListOfItemCodeImages } = useUploadItemCodeImageStore((state) => ({
    cSetListOfItemCodeImages: state.setListOfItemCodeImages,
  }));

  const { cSetItemCode2 } = useUploadItemCodeImageStore((state) => ({
    cSetItemCode2: state.setItemCode2,
  }));

  return {
    cSetSearch,
    cSetToggleSearchBar,
    cSetToggleSideBar,
    cSetItemCode,
    cSetListOfItemCodeImages,
    cSetItemCode2,
  };
};

export default setter;
