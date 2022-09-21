import { useState } from "react";
import "./SearchCategory.scss";

import SearchItems from "./SearchItems";

const SearchCategory = ({ searchresult, setCurrentActivity }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const itemList = searchresult.map((ele,i) => {
    const itemsToFind = ele.name.includes(searchInput) ? ele : '';
    return (
      <SearchItems
        setCurrentActivity={setCurrentActivity}
        key={ele._id}
        item={itemsToFind}
        isHidden={!isShowingMore && i > 5}
      />
    );
  });
  if (itemList.length<=5) {
   setIsShowingMore(false)
 }

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
      {itemList.length <= 5 ? null : (
        <button
          className="SearchCategoryButton"
          onClick={() => setIsShowingMore((v) => !v)}
        >
          {!isShowingMore? 'More':'Less'}
        </button>
      )}
    </>
  );
};

export default SearchCategory;
