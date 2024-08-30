import { useEffect } from "react";
import ListOfItems from "../facilitiesPage/facilitiesRightColumn/listOfItems/ListOfItems";
import { getListOfFacilities } from "../../get/getListOfFacilities";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const BorrowerHistoryPage = () => {
  const { data, status, error, fetchNextPage } = useInfiniteQuery(
    {
      queryKey: ["forFacilities"],
      queryFn: getListOfFacilities,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage?.nextPage,
    }
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage, inView]);

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div className="col-lg-8 col-xs-12">
      {data.pages.map((page) => {
        return (
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
        );
      })}

      <div ref={ref}></div>
    </div>
  );
};

export default BorrowerHistoryPage;
