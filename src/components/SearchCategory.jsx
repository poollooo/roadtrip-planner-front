import { useState } from "react";
import "./SearchCategory.scss";

import SearchItems from "./SearchItems";

const SearchCategory = ({ searchresult, setCurrentActivity }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const itemList = searchresult.map((ele, i) => {
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
  if (itemList.length <= 5) {
    setIsShowingMore(false)
  }

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="SearchCategory">
        <div className="SearchCategory-header px-4">
          <h1>
            <strong>Look for a {searchresult[0]?.category}</strong>
          </h1>
          <form>
            <label>
              <input
                type="text"
                name="Search"
                placeholder={`Search by ${searchresult[0]?.category}`}
                onChange={searchInputHandler}
                className="border-2 pl-4 border-gray-200 hover:border-green-pine text-green-pine text-md bg-white px-2 outline-none rounded-full"
              />
            </label>
          </form>
        </div>
        <div className="SearchCategoryList rounded-lg">{itemList}</div>
      </div>
      {itemList.length <= 5 ? null : (
        <button
          className="text-gray-500"
          onClick={() => setIsShowingMore((v) => !v)}
        >
          {!isShowingMore ? 'See more' : 'Less'}
        </button>
      )}
    </>
  );
};

export default SearchCategory;
