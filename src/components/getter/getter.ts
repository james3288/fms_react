import { useFacilityHistoryStore } from "../store/useFacilityHistory";

import { useHeaderStore } from "../store/useHeaderStore";
import { useUploadItemCodeImageStore } from "../store/useUploadItemCodeImageStore";

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

  const { cItemCode } = useUploadItemCodeImageStore((state) => ({
    cItemCode: state.itemCode,
  }));

  const { cListOfItemCodeImages } = useUploadItemCodeImageStore((state) => ({
    cListOfItemCodeImages: state.listOfItemCodeImages,
  }));

  const { cItemCode2 } = useUploadItemCodeImageStore((state) => ({
    cItemCode2: state.itemCode2,
  }));

  return {
    cSearch,
    cToggleSearchBar,
    cToggleSideBar,
    cItemCode,
    cListOfItemCodeImages,
    cItemCode2,
  };
};

export default getter;
