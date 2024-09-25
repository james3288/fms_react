import { useQuery } from "@tanstack/react-query";
import Alerts from "../../../alerts/Alerts";
import {
  distinctFacilityHistory,
  facilityHistory,
} from "../../../typeProps/typeProps";
import BorrowerHistoryItems2 from "./borrowerHistoryItems/BorrowerHistoryItems2";
import useDistinctFacilityHistory from "../../../customHooks/useDistinctFacilityHistory";

type facHistoryProps = {
  item_code: string;
  item_name: string;
};

const FacilitiesRightColumnBorrowerHistory = ({
  item_code,
}: facHistoryProps) => {
  const { distinctFacilityHistory, status, error } =
    useDistinctFacilityHistory(item_code);

  return (
    <>
      {distinctFacilityHistory?.distinctFH?.map(
        (item: distinctFacilityHistory) => (
          <BorrowerHistoryItems2
            brand={item.brand}
            item_name={item.item_name}
            item_code={item_code}
            key={`_${item.item_code}`}
          />
        )
      )}
    </>
  );
};

export default FacilitiesRightColumnBorrowerHistory;
