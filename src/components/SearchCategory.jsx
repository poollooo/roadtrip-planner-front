import { useState, useEffect } from "react";
import "./SearchCategory.scss";

import SearchItems from "./SearchItems";

const SearchCategory = ({ searchresult }) => {
  const [searchCategory, setSearchCategory] = useState();
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    setSearchCategory(searchresult);
  }, [searchresult]);

  if (!searchCategory) {
    return <h1>Loading</h1>;
  }

  const itemList = searchCategory.map((ele, i) => {
    return (
      <SearchItems
        key={ele._id}
        item={ele}
        isHidden={!isShowingMore && i > 3}
      />
    );
  });

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
                placeholder="Search"
                className="search-input"
              />
            </label>
          </form>
        </div>

        <div className="SearchCategoryList">{itemList}</div>
      </div>
      <button onClick={() => setIsShowingMore((v) => !v)}>More</button>
    </>
  );
};

export default SearchCategory;
