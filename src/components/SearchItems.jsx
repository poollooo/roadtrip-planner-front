import { useContext } from "react";
import { SearchContext } from "../Context/SearchResultContext";
import "./SearchItems.scss";

const SearchItems = ({ item, isHidden }) => {
  const { selectedExperience, setSelectedExperience } =
    useContext(SearchContext);

  if (!item) {
    return;
  }

  return (
    <div className={`SearchItem ${isHidden && "hidden"}`}>
      <picture>
        <img src={item.photo[0]} alt={`${item.category} View`} />
      </picture>

      <div className="Search-item-description">
        <h3>
          <strong>{item.name}</strong>
        </h3>

        <p>
          <strong>Rating :</strong> {item.rawRating.toFixed(1)} 🌟
        </p>
        <p>
          <strong>Numbers Of Views :</strong> {item.numberOfReviews}
        </p>

        <button
          onClick={(event) => {
            setSelectedExperience((prevState) => {
              return [...prevState, event.target.closest(".SearchItem")];
            });
          }}
        >
          Add to My Trip
        </button>
      </div>
    </div>
  );
};

export default SearchItems;
