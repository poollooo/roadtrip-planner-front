import { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchResultContext";
import "./SearchItems.scss";

const SearchItems = ({ item, isHidden }) => {
  const { selectedExperience, setSelectedExperience } =
    useContext(SearchContext);
  const [cancelSelected, setCancelSelected] = useState(false);

  if (!item) {
    return;
  }

  return (
    <div id={item._id} className={`SearchItem ${isHidden && "hidden"}`}>
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
          onClick={() => {
            if (!cancelSelected) {
              setSelectedExperience((prevState) => {
                const foundExp = prevState.find((ele) => ele._id === item._id);
                if (foundExp) {
                  return prevState;
                }
                return [...prevState, item];
              });
            } else {
              setSelectedExperience((prevState) => {
                const keepExp = prevState.filter((ele) => ele._id !== item._id);
                return [...keepExp];
              });
            }
            setCancelSelected(!cancelSelected);
          }}
        >
          {!cancelSelected ? "Add to My Trip" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default SearchItems;
