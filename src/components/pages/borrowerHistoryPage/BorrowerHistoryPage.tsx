import { useEffect } from "react";
import ListOfItems from "../facilitiesPage/facilitiesRightColumn/listOfItems/ListOfItems";
import { getListOfFacilities } from "../../get/getListOfFacilities";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { facilities } from "../../typeProps/typeProps";
import getter from "../../getter/getter";
import FacilityHistoryLoading from "../../loadingEffect/facilityHistoryLoading";

const BorrowerHistoryPage = () => {
  const search = getter().cSearch;

  const { data, status, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["forFacilities", search],
    queryFn: ({ pageParam = 0 }) => getListOfFacilities({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  // const data2: facilities = [];
  // data2.item_code = "DC-40";

  const { ref, inView } = useInView();

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage, inView]);

  return (
    <div className="col-lg-8 col-xs-12">
      {data?.pages.map((page) => {
        return (
          <>
            <div key={page?.currentPage}>
              {page?.data.map((item) => {
                return (
                  <ListOfItems
                    data={item}
                    page="borrower-history"
                    key={item.item_code_id}
                  />
                );
              })}
            </div>
          </>
        );
      })}

      {/* <ListOfItems
    data={data2}
    page="borrower-history"
    key={data2.item_code_id}
  /> */}
      <div ref={ref}></div>
    </div>
  );
  // return status === "pending" ? (
  //   <div>
  //     <FacilityHistoryLoading />
  //   </div>
  // ) : status === "error" ? (
  //   <div>{error.message}</div>
  // ) : (
  //   <div className="col-lg-8 col-xs-12">
  //     {data?.pages.map((page) => {
  //       return (
  //         <div key={page?.currentPage}>
  //           {page?.data.map((item) => {
  //             return (
  //               <ListOfItems
  //                 data={item}
  //                 page="borrower-history"
  //                 key={item.item_code_id}
  //               />
  //             );
  //           })}
  //         </div>
  //       );
  //     })}

  //     {/* <ListOfItems
  //       data={data2}
  //       page="borrower-history"
  //       key={data2.item_code_id}
  //     /> */}
  //     <div ref={ref}></div>
  //   </div>
  // );
};

export default BorrowerHistoryPage;
