import { useEffect, useState } from "react";
import setter from "../../setter/setter";
import getter from "../../getter/getter";

const SearchBar = () => {
  const setSearch = setter().cSetSearch;
  const toggleSearchBar = getter().cToggleSearchBar;

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div
      className={`search-bar ${toggleSearchBar && "search-bar-show"}`}
      id="search-bar-id"
    >
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
