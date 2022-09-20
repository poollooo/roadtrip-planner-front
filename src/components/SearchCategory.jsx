import { useState, useEffect } from "react";
import "./SearchCategory.scss";

import SearchItems from "./SearchItems";

const SearchCategory = ({ searchresult, setCurrentActivity }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const itemList = searchresult.map((ele, i) => {
    const itemsToFind = ele.name.includes(searchInput) ? ele : null;
    return (
      <SearchItems
        setCurrentActivity={setCurrentActivity}
        key={ele._id}
        item={itemsToFind}
        isHidden={!isShowingMore && i > 3}
      />
    );
  });

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="SearchCategory">
        <div className="SearchCategory-header">
          <h1>
            <strong>Look for a {searchresult[0]?.category}</strong>
          </h1>
          <form>
            <label>
              <input
                type="text"
                name="Search"
                placeholder={`Search by ${searchresult[0]?.category} name`}
                onChange={searchInputHandler}
                className="search-input"
              />
            </label>
          </form>
        </div>
        <div className="SearchCategoryList">{itemList}</div>
      </div>
      <button
        className="SearchCategoryButton"
        onClick={() => setIsShowingMore((v) => !v)}
      >
        More
      </button>
    </>
  );
};

export default SearchCategory;
