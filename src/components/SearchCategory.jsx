import { useState, useEffect } from "react";
import "./SearchCategory.scss";

import SearchItems from "./SearchItems";

const SearchCategory = ({ searchresult }) => {
  const [searchCategory, setSearchCategory] = useState();
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    setSearchCategory(searchresult);
  }, [searchresult]);

  if (!searchCategory) {
    return <h1>Loading</h1>;
  }

  const itemList = searchCategory.map((ele, i) => {
    const itemsToFind = ele.name.includes(searchInput) ? ele : null;
    return (
      <SearchItems
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
            <strong>Look for a {searchCategory[0].category}</strong>
          </h1>
          <form>
            <label>
              <input
                type="text"
                name="Search"
                placeholder={`Search by ${searchCategory[0].category} name`}
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
