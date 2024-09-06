import { useEffect, useState } from "react";
import { useFacilityHistoryStore } from "../../store/useFacilityHistory";
import setter from "../../setter/setter";
import getter from "../../getter/getter";

const SearchBar = () => {
  const setSearch = setter();
  // const search = getter();

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch.cSetSearch(e.currentTarget.value);

    // setter(e.currentTarget.value);
  };

  // useEffect(() => {
  //   console.log(search.cSearch);
  // }, [search]);

  return (
    <div className="search-bar" id="search-bar-id">
      <form
        className="search-form d-flex align-items-center"
        method="POST"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          onChange={handleOnSearch}
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
