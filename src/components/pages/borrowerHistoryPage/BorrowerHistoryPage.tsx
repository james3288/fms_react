import { useEffect } from "react";
import ListOfItems from "../facilitiesPage/facilitiesRightColumn/listOfItems/ListOfItems";
import { getListOfFacilities } from "../../get/getListOfFacilities";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import getter from "../../getter/getter";
import FacilityHistoryLoading from "../../loadingEffect/facilityHistoryLoading";
import Alerts from "../../alerts/Alerts";

const BorrowerHistoryPage = () => {
  // getter
  const search = getter().cSearch;

  // // setter
  // const setListOfItemCodeImages = setter().cSetListOfItemCodeImages;

  const { data, status, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["forFacilities", search],
    queryFn: ({ pageParam = 0 }) => getListOfFacilities({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage, inView]);

  return (
    <div className="col-lg-8 col-xs-12">
      {data?.pages?.length === undefined && <FacilityHistoryLoading />}
      {/* {data?.pages?.length === undefined ? (
        <FacilityHistoryLoading />
      ) : (
        <Alerts
          message={`${data?.pages.length} pages has been load!`}
          option="success"
        />
      )} */}

      {data?.pages.map((page) => {
        return (
          <>
            <div key={page?.currentPage}>
              {page?.data.map((item, index) => {
                return (
                  <ListOfItems
                    data={item}
                    page="borrower-history"
                    key={index}
                  />
                );
              })}
            </div>
          </>
        );
      })}

      <div ref={ref}></div>
    </div>
  );
};

export default BorrowerHistoryPage;
